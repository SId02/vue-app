<script setup>

</script>

<template>
<div class="py-10">
  <div class="text-center">
    <p class="text-base font-semibold text-black">404</p>
    <h1 class="mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl">
      Page not found
    </h1>
    <p class="mt-4 text-base leading-7 text-gray-600">
      Sorry, we couldn&amp;apos:t find the page you&#x27;re looking for.
    </p>
    <div class="flex items-center justify-center mt-4 gap-x-3">
      <button
        type="button"
        class="inline-flex items-center px-3 py-2 text-sm font-semibold text-black border border-black rounded-md shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
     @click="$router.back()" 
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="mr-2"
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Go back
      </button>
      <button
        type="button"
        class="px-3 py-2 text-sm font-semibold text-white bg-black rounded-md shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Contact us
      </button>
    </div>
  </div>
</div>

</template>

<style scoped></style>