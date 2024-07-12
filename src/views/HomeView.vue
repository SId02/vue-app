<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="relative w-full">
<div class="relative z-0 px-6 bg-white isolate pt-14 lg:px-8">
  <div class="relative max-w-2xl py-24 mx-auto">
    <div class="text-center">
      <h3 class="text-2xl font-bold tracking-tight text-transparent text-gray-900 sm:text-4xl bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-800">
      Projects in VueJS 3,Vue Router 4,Tailwind Css 3, Axios 
      </h3>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        In this project learning Vue JS ,Vue Router and Tailwind Css for style.
        Some project with fetch data from API and display it
      </p>
      <div class="flex items-center justify-center mt-10 gap-x-2">
        <a href="https://vuejs.org/"
          class="px-3 py-2 text-sm font-semibold text-white transition-all duration-300 ease-in-out bg-black rounded-md shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black focus:outline-none focus:shadow-outlinetransform hover:scale-105"
          >Vue JS</a>

        <a href="https://tailwindcss.com/"
          class="px-3 py-2 text-sm font-semibold text-black transition-all duration-300 ease-in-out border border-black rounded-md shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black focus:outline-none focus:shadow-outlinetransform hover:scale-105"
          >Tailwind CSS</a>
      </div>
    </div>
  </div>
</div>
</div>
  <section class="relative py-10 bg-zinc-300 sm:py-16 lg:py-24 lg:pt-36">
    <div class="px-4 mx-auto space-y-5 text-center max-w-7xl sm:px-6 lg:px-8 md:space-y-10">
      <div class="grid items-center max-w-4xl grid-cols-3 gap-8 mx-auto mt-12 font-medium md:mt-20 md:grid-cols-4">
        <router-link to="/agevalidation" class="flex items-center justify-center h-12 bg-white rounded-md shadow-lg">Age Validation</router-link>
        <router-link to="/counterapp" class="flex items-center justify-center h-12 bg-white rounded-md shadow-lg">Counter</router-link>
        <router-link to="/datepickerwith180days" class="flex items-center justify-center h-12 bg-white rounded-md shadow-lg">
          Date Picker with 180 days</router-link>
        <router-link to="/randomcolorgenerator" class="flex items-center justify-center h-12 bg-white rounded-md shadow-lg">Random Color Generator</router-link>

        <router-link to="/randomquotes" class="flex items-center justify-center h-12 bg-white rounded-md shadow-lg">Random Quotes</router-link>

        <router-link to="/togglepasswordvisibility" class="flex items-center justify-center h-12 bg-white rounded-md shadow-lg">Toggle Password Visibility</router-link>
        <router-link to="/passwordgenerator" class="flex items-center justify-center h-12 bg-white rounded-md shadow-lg">Password Generator</router-link>

        <router-link to="/" class="flex items-center justify-center h-12 bg-white rounded-md shadow-lg"> Github User Profile Finder </router-link>

        <router-link to="/currencyconverter"  class="flex items-center justify-center h-12 bg-white rounded-md shadow-lg">Currency Converter</router-link>

        <router-link  to="/leapyearchecker" class="flex items-center justify-center h-12 bg-white rounded-md shadow-lg">Leap Year Checker</router-link>

        <router-link to="/formvalidation" class="flex items-center justify-center h-12 bg-white rounded-md shadow-lg">Form Validation </router-link>

        <router-link  to="/tipcalculator"  class="flex items-center justify-center h-12 bg-white rounded-md shadow-lg">Tip Calculator</router-link>

        <router-link to="/" class="flex items-center justify-center h-12 bg-white rounded-md shadow-lg"> </router-link> 

        <router-link  to="/" class="flex items-center justify-center h-12 bg-white rounded-md shadow-lg"></router-link>

        <router-link to="/" class="flex items-center justify-center h-12 bg-white rounded-md shadow-lg"> </router-link>

        <router-link  to="/"  class="flex items-center justify-center h-12 bg-white rounded-md shadow-lg"></router-link>

        <router-link to="/" class="flex items-center justify-center h-12 bg-white rounded-md shadow-lg "> </router-link> 
      </div>

        <!-- <div class="flex justify-center mt-10 md:mt-20">
          <router-link
            to="/"
            class="px-3 py-2 text-sm font-semibold text-black transition-all duration-300 ease-in-out border border-black rounded-md shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black focus:outline-none focus:shadow-outlinetransform hover:scale-105">
            more Projects...
          </router-link>
      </div>  -->

    </div>
  </section>

  
</template>
<style></style>
