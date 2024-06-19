<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
	<div class="relative w-full bg-white">
		<div class="flex items-center justify-between px-4 py-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
			<div class="inline-flex items-center space-x-2">
				<router-link to="/" class="font-bold">Vue App</router-link>
			</div>
			<div class="hidden lg:block">
				<ul class="inline-flex space-x-8">
					<li>
						<router-link
							to="/"
							class="text-sm font-semibold text-gray-800 hover:text-gray-900">
							Home
						</router-link>
					</li>
					<li>
						<router-link
							to="/about"
							class="text-sm font-semibold text-gray-800 hover:text-gray-900">
							About
						</router-link>
					</li>
					<li>
						<router-link
							to="/project"
							class="text-sm font-semibold text-gray-800 hover:text-gray-900">
							Project
						</router-link>
					</li>
					<li>
						<router-link
							to="/contact"
							class="text-sm font-semibold text-gray-800 hover:text-gray-900">
							Contact
						</router-link>
					</li>
					<li>
						<router-link
							to="/logindefault"
							class="text-sm font-semibold text-gray-800 hover:text-gray-900">
						Login Default
						</router-link>
					</li>
					<li>
						<router-link
							to="/loginwithapi"
							class="text-sm font-semibold text-gray-800 hover:text-gray-900">
						Login With Api
						</router-link>
					</li>
					
				</ul>
			</div>
			<div class="hidden lg:block">
				<router-link to="/https://vuejs.org/">
					<button
						type="button"
						class="px-3 py-2 text-sm font-semibold text-white bg-black rounded-md shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
						VueJS
					</button></router-link>
			</div>
			<div class="lg:hidden">
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
					class="w-6 h-6 cursor-pointer">
					<line x1="4" y1="12" x2="20" y2="12"></line>
					<line x1="4" y1="6" x2="20" y2="6"></line>
					<line x1="4" y1="18" x2="20" y2="18"></line>
				</svg>
			</div>
		</div>
	</div>
</template>
<style scoped></style>
