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
  <!--<div class="relative w-full">
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
  </div> -->
  
 
  
  <div class="relative w-full">
<div class="relative z-0 px-6 bg-white isolate pt-14 lg:px-8">
  <div class="relative max-w-2xl py-24 mx-auto">
    <div class="text-center">
      <h3 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-800">
      Projects in VueJS 3,Vue Router 4,Tailwind Css 3, Axios 
      </h3>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        In this project learning Vue JS ,Vue Router and Tailwind Css for style.
        Some project with fetch data from API and display it
      </p>
      <div class="flex items-center justify-center mt-10 gap-x-2">
        <router-link
          :to="vuejsDocs"
          class="px-3 py-2 text-sm font-semibold text-white bg-black rounded-md shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black focus:outline-none focus:shadow-outlinetransform transition-all  hover:scale-105  duration-300 ease-in-out"
          >Vue JS</router-link>

        <router-link
          :to="tailwindcssDocs"
          class="px-3 py-2 text-sm font-semibold text-black border border-black rounded-md shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black focus:outline-none focus:shadow-outlinetransform transition-all  hover:scale-105  duration-300 ease-in-out"
          >Tailwind CSS</router-link>
      </div>
    </div>
  </div>
</div>
</div>
  <section class="py-10 relative bg-zinc-300 sm:py-16 lg:py-24 lg:pt-36">
    <div class=" px-4 mx-auto max-w-7xl  sm:px-6 lg:px-8  text-center space-y-5  md:space-y-10 ">
      <!-- <div class="max-w-2xl mx-auto text-center">
        <h3 class="text-xl font-bold text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-snug text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-800" >
        Projects in VueJS 3,Vue Router 4,Tailwind Css 3, Axios 
        </h3>
      </div> -->

      <div class="grid items-center max-w-4xl grid-cols-3 gap-8 mx-auto mt-12 md:mt-20 md:grid-cols-4 font-medium">
         <router-link to="/"  class="bg-white h-12 flex shadow-lg items-center justify-center rounded-md">From Validation </router-link>
        <router-link  to="/" class="bg-white h-12 flex shadow-lg items-center justify-center rounded-md" > Tip Calculator</router-link>
        <router-link to="/" class="bg-white h-12 flex shadow-lg items-center justify-center rounded-md">Drag & Drop</router-link>
        <router-link to="/" class="bg-white h-12 flex shadow-lg items-center justify-center rounded-md">Image Generator</router-link>

        <router-link to="/" class="bg-white h-12 flex shadow-lg items-center justify-center rounded-md"></router-link>

        <router-link to="/"class="bg-white h-12 flex shadow-lg items-center justify-center rounded-md"></router-link>

        <router-link to="/"class="bg-white h-12 flex shadow-lgitems-center justify-center rounded-md"> </router-link>

        <router-link to="/"  class="bg-white h-12 flex shadow-lg items-center justify-center rounded-md"></router-link>

        <router-link  to="/" class="bg-white h-12 flex shadow-lg items-center justify-center rounded-md"></router-link>

        <router-link to="/" class="bg-white h-12 flex shadow-lg items-center justify-center rounded-md"> </router-link>

        <router-link  to="/"  class="bg-white h-12 flex shadow-lg items-center justify-center rounded-md"></router-link>

        <router-link to="/" class="bg-white h-12 flex shadow-lg items-center justify-center rounded-md"> </router-link> 

        <router-link  to="/" class="bg-white h-12 flex shadow-lg items-center justify-center rounded-md"></router-link>

        <router-link to="/" class="bg-white h-12 flex shadow-lg items-center justify-center rounded-md"> </router-link>

        <router-link  to="/"  class="bg-white h-12 flex shadow-lg items-center justify-center rounded-md"></router-link>

        <router-link to="/" class="bg-white h-12 flex shadow-lg items-center justify-center rounded-md "> </router-link> 
      </div>

       <div class="flex justify-center mt-10 md:mt-20">
          <router-link
            to="/"
            class="px-3 py-2 text-sm font-semibold text-black border border-black rounded-md shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black focus:outline-none focus:shadow-outlinetransform transition-all  hover:scale-105  duration-300 ease-in-out">
            more Projects...
          </router-link>
      </div>

    </div>
  </section>
  
  
</template>
<style></style>
