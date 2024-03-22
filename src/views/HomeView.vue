<script>
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {  
    const vuejsDocs = 'https://vuejs.org/'
    const tailwindcssDocs = 'https://tailwindcss.com/'
    return { vuejsDocs,tailwindcssDocs}
  }
})
</script>

<template>
  <div class="relative w-full">
    <div class="relative z-0 px-6 bg-white isolate pt-14 lg:px-8">
      <div class="relative max-w-2xl py-24 mx-auto">
        <div class="text-center">
          <h3 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
           Vue JS 3 And Vue Router 4 with Tailwind CSS for style
          </h3>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            In this project learning Vue JS ,Vue Router and Tailwind Css for style.
            Some project with fetch data from API and display it
          </p>
          <div class="flex items-center justify-center mt-10 gap-x-2">
            <router-link
              :to="vuejsDocs"
              class="px-3 py-2 text-sm font-semibold text-white bg-black rounded-md shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >Vue JS</router-link>

            <router-link
              :to="tailwindcssDocs"
              class="px-3 py-2 text-sm font-semibold text-black border border-black rounded-md shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >Tailwind CSS</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="">
      <h2 class="text-center">Project List</h2>

    </div>
  </div>
</template>
<style></style>
