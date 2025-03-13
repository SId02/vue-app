
<template>
  <div class="container px-4 py-6 mx-auto">
    <div class="flex justify-start mb-6">
      <router-link
        to="/"
        class="inline-block px-4 py-2 text-sm text-white transition-colors bg-gray-500 rounded hover:bg-gray-700"
      >
        Back to Home
      </router-link>
    </div>
  <div class="container p-4 mx-auto">
    <h1 class="mb-4 text-2xl font-bold">Product List Sort Search Filter</h1>

    <!-- Search Input -->
    <div class="mb-4">
      <label for="search" class="block mb-2 text-sm font-bold text-gray-700">Search:</label>
      <input
        type="text"
        id="search"
        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        placeholder="Search products"
        v-model="searchTerm"
      />
    </div>

    <!-- Sort Select -->
    <div class="mb-4">
      <label for="sort" class="block mb-2 text-sm font-bold text-gray-700">Sort by:</label>
      <select
        id="sort"
        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        v-model="sortOption"
      >
        <option value="id">ID</option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
      </select>
    </div>

    <!-- Category Filter -->
    <div class="mb-4">
      <label for="category" class="block mb-2 text-sm font-bold text-gray-700">Filter by Category:</label>
      <select
        id="category"
        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        v-model="filterCategory"
      >
        <option value="">All Categories</option>
        <option v-for="category in uniqueCategories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
    </div>

    <!-- Product List -->
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div v-for="product in sortedProducts" :key="product.id" class="overflow-hidden bg-white rounded-lg shadow-md">
        <img :src="product.thumbnail" :alt="product.title" class="object-cover w-full h-48" />
        <div class="p-4">
          <h2 class="text-lg font-semibold">{{ product.title }}</h2>
          <p class="text-gray-600">{{ product.brand }}</p>
          <p class="text-gray-700">{{ product.description }}</p>
        </div>
      </div>
    </div>

    <p v-if="loading" class="text-center">Loading products...</p>
    <p v-if="error" class="text-center text-red-500">Error: {{ error }}</p>
  </div>
</div>
</template>

<script>
import { ref, onMounted, computed, watch } from 'vue';

export default {
  setup() {
    const products = ref([]);
    const searchTerm = ref('');
    const sortOption = ref('id');
    const filterCategory = ref('');
    const loading = ref(false);
    const error = ref(null);

    const fetchProducts = async () => {
      loading.value = true;
      error.value = null;
      try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        products.value = data.products;
      } catch (e) {
        error.value = e.message;
      } finally {
        loading.value = false;
      }
    };

    onMounted(fetchProducts);

    const filteredProducts = computed(() => {
      let filtered = products.value;

      if (searchTerm.value) {
        const lowerSearchTerm = searchTerm.value.toLowerCase();
        filtered = filtered.filter(product =>
          product.title.toLowerCase().includes(lowerSearchTerm) ||
          product.description.toLowerCase().includes(lowerSearchTerm)
        );
      }

      if (filterCategory.value) {
        filtered = filtered.filter(product => product.category === filterCategory.value);
      }

      return filtered;
    });

    const sortedProducts = computed(() => {
      const sorted = [...filteredProducts.value];

      sorted.sort((a, b) => {
        if (sortOption.value === 'price') {
          return a.price - b.price;
        } else if (sortOption.value === 'rating') {
          return b.rating - a.rating;
        }
        return a.id - b.id;
      });

      return sorted;
    });

    const uniqueCategories = computed(() => {
      return [...new Set(products.value.map(product => product.category))];
    });

    return {
      products,
      searchTerm,
      sortOption,
      filterCategory,
      loading,
      error,
      sortedProducts,
      uniqueCategories
    };
  }
};
</script>