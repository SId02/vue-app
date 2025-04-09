
<template>
	<div class="bg-white">
	  <nav class="relative px-4 py-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div class="flex items-center justify-between">
		  <div class="flex items-center space-x-2">
			<span class="font-bold">Vue App</span>
		  </div>
		  <div class="hidden space-x-8 lg:flex">
			<router-link to="/" class="nav-link">Home</router-link>
			<router-link to="/about" class="nav-link">About</router-link>
			<router-link to="/project" class="nav-link">Project</router-link>
			<router-link to="/contact" class="nav-link">Contact</router-link>
			<router-link to="/logindefault" class="nav-link">Login Default</router-link>
			<router-link to="/loginwithapi" class="nav-link">Login With Api</router-link>
		  </div>
		  <div class="lg:hidden">
			<button @click="toggleMenu">
			  <svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="w-6 h-6"
			  >
				<line x1="4" y1="12" x2="20" y2="12"></line>
				<line x1="4" y1="6" x2="20" y2="6"></line>
				<line x1="4" y1="18" x2="20" y2="18"></line>
			  </svg>
			</button>
		  </div>
		</div>
		<div v-if="isMenuOpen" class="mt-2 lg:hidden">
		  <div class="flex flex-col space-y-2">
			<router-link to="/" class="mobile-nav-link">Home</router-link>
			<router-link to="/about" class="mobile-nav-link">About</router-link>
			<router-link to="/project" class="mobile-nav-link">Project</router-link>
			<router-link to="/contact" class="mobile-nav-link">Contact</router-link>
			<router-link to="/logindefault" class="mobile-nav-link">Login Default</router-link>
			<router-link to="/loginwithapi" class="mobile-nav-link">Login With Api</router-link>
		  </div>
		</div>
	  </nav>
	</div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isMenuOpen = ref(false);
  
  const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value;
  };
  </script>
  
  <style scoped>
  .nav-link {
	@apply text-sm font-semibold text-gray-800 hover:text-gray-900;
  }
  .mobile-nav-link {
	@apply block px-3 py-2 text-sm font-semibold text-gray-800 hover:text-gray-900;
  }
  </style>