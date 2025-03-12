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
    <div class="container p-4 pt-6 mx-auto md:p-6 lg:px-16 xl:px-20">
      <h1 class="mb-4 text-3xl font-bold">Product List</h1>
      <div v-if="loading" class="text-center">Loading...</div>
      <div v-else class="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div v-for="product in products" :key="product.id" class="p-4 bg-white rounded-lg shadow-md">
          <h2 class="mb-4 text-2xl font-bold">{{ product.title }}</h2>
          <p class="text-gray-600">{{ product.body }}</p>
        </div>
      </div>
      <nav class="flex justify-center mt-4" role="navigation" aria-label="pagination">
        <ul class="flex justify-center">
          <li v-for="pageNumber in totalPages" :key="pageNumber">
            <button
              class="px-4 py-2 mx-1 rounded-lg hover:bg-gray-100"
              :class="{ 'bg-blue-500 text-white': currentPage === pageNumber }"
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
  import axios from 'axios';
  
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
          const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts?_limit=${this.productsPerPage}&_page=${this.currentPage}`
          );
          this.products = response.data;
        } catch (error) {
          console.error('Error fetching products:', error);
        } finally {
          this.loading = false;
        }
      },
      handlePageChange(pageNumber) {
        this.currentPage = pageNumber;
      },
    },
  };
  </script>