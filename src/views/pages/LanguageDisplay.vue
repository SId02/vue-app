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
    <div class="container p-5 mx-auto">
      <h1 class="mb-5 text-3xl text-center">Language</h1>
      <div class="flex justify-center">
        <div class="w-1/3 p-6 bg-white rounded-lg shadow-md">
          <LanguageSelector />
          <p class="p-3 mt-3">{{ $t('welcome_message') }}</p>
        </div>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  import LanguageSelector from '../../components/LanguageSelector/LanguageSelector.vue'
  export default {
    components: { LanguageSelector }
  }
  </script>
  