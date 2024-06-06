<template>
    <div class="p-5">
      <div class="flex flex-col md:flex-row md:justify-center">
        <div class="w-full md:w-1/2">
          <div class="p-5 bg-white rounded-lg shadow-md">
            <div class="text-gray-700">
              <p class="subtitle">{{ quote }}</p>
              <br />
            </div>
            <div class="flex items-center justify-center mt-5">
              <button class="mb-3 button" @click="handleQuote">
                <span class="p-5 icon">Next</span>
                <i class="fa-solid fa-caret-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import axios from 'axios';
  
  export default {
    setup() {
      const quote = ref('');
  
      const handleQuote = async () => {
        const res = await axios.get('https://api.quotable.io/random');
        quote.value = res.data.content;
      };
  
      return {
        quote,
        handleQuote,
      };
    },
  };
  </script>
  
  <style>
  @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
  </style>
  