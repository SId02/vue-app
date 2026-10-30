<style scoped>
/* Optional scoped styling */
</style>
<template>
  <div class="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between">
    
    <!-- Top Bar Navigation -->
    <div class="max-w-4xl w-full mx-auto px-6 pt-6">
      <router-link
        to="/"
        class="inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200/80 rounded-xl shadow-sm hover:bg-slate-100 transition-all"
      >
        ← Back to Home
      </router-link>
    </div>

    <!-- Main Content -->
    <main class="max-w-2xl mx-auto px-4 py-16 text-center space-y-6">
      <div class="bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-slate-200/80 space-y-4">
        <span class="inline-flex items-center px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-50 rounded-full">
          About Project
        </span>
        
        <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          This is an About Page
        </h1>
        
        <p class="text-slate-600 text-base leading-relaxed max-w-lg mx-auto">
          This portfolio application showcases a collection of interactive mini-projects built using Vue 3 Composition API, Vue Router, and Tailwind CSS.
        </p>
      </div>
    </main>

    <!-- Minimalist Footer -->
    <footer class="py-8 bg-white border-t border-slate-200/80 text-center">
      <div class="max-w-7xl mx-auto px-4 flex justify-center items-center">
        <div class="flex items-center space-x-1 font-medium text-slate-500 text-xs sm:text-sm">
          <span>Built with</span>
          <span class="text-indigo-600 font-semibold">Vue 3 Composition API</span>
          <span>&</span>
          <span class="text-slate-800 font-semibold">Tailwind CSS</span>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

