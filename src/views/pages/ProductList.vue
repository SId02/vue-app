<template>
  <div class="min-h-screen bg-slate-50 text-slate-800 pb-16">
    <div class="max-w-7xl mx-auto px-4 py-6">
      
      <!-- Back to Home Button -->
      <div class="mb-6">
        <router-link
          to="/"
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-slate-700 rounded-lg shadow-sm hover:bg-slate-800 transition-colors"
        >
          ← Back to Home
        </router-link>
      </div>

      <!-- Main Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-extrabold tracking-tight text-slate-900">Product List</h1>
        <p class="text-sm text-slate-500 mt-1">Browse through our collection of items with pagination</p>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center py-24">
        <div class="w-8 h-8 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
        <span class="ml-3 text-sm font-medium text-slate-600">Loading products...</span>
      </div>

      <!-- Products Grid -->
      <div v-else class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="product in products"
          :key="product.id"
          class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
        >
          <div>
            <span class="inline-block px-2.5 py-1 mb-3 text-xs font-semibold text-indigo-600 bg-indigo-50 rounded-full">
              Post #{{ product.id }}
            </span>
            <h2 class="text-lg font-semibold text-slate-900 mb-2 capitalize line-clamp-1">{{ product.title }}</h2>
            <p class="text-slate-600 text-sm leading-relaxed line-clamp-3">{{ product.body }}</p>
          </div>
          <div class="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-400">
            <span>View Details</span>
            <span>→</span>
          </div>
        </div>
      </div>

      <!-- Sleek Pagination Navigation -->
      <nav v-if="!loading" class="flex justify-center mt-10" role="navigation" aria-label="pagination">
        <ul class="flex items-center space-x-1 bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
          <li v-for="pageNumber in totalPages" :key="pageNumber">
            <button
              class="px-3.5 py-2 text-sm font-medium rounded-lg transition-colors"
              :class="[
                currentPage === pageNumber
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              ]"
              @click="handlePageChange(pageNumber)"
            >
              {{ pageNumber }}
            </button>
          </li>
        </ul>
      </nav>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      currentPage: 1,
      totalPages: 10, 
      loading: false,
      productsPerPage: 10,
    };
  },
  mounted() {
    this.fetchProducts();
  },
  watch: {
    currentPage() {
      this.fetchProducts();
    },
  },
  methods: {
    async fetchProducts() {
      this.loading = true;
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=${this.productsPerPage}&_page=${this.currentPage}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        this.products = data;
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        this.loading = false;
      }
    },
    handlePageChange(pageNumber) {
      if (this.currentPage !== pageNumber) {
        this.currentPage = pageNumber;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
  },
};
</script>