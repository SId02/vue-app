
<template>
  <div class="relative w-full">
    <div class="relative z-0 px-6 bg-white isolate pt-14 lg:px-8">
      <div class="relative max-w-2xl py-24 mx-auto">
        <div class="text-center">
          <h3 class="text-2xl font-bold tracking-tight text-transparent text-gray-900 sm:text-4xl bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-800">
            Projects in VueJS 3, Vue Router 4, Tailwind CSS 3, Axios
          </h3>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            In this project learning Vue JS, Vue Router, and Tailwind CSS for style.
            Some projects fetch data from APIs and display it.
          </p>
          <div class="flex items-center justify-center mt-10 gap-x-2">
            <a href="https://vuejs.org/"
              class="px-3 py-2 text-sm font-semibold text-white transition-all duration-300 ease-in-out bg-black rounded-md shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black focus:outline-none focus:shadow-outlinetransform hover:scale-105">
              Vue JS
            </a>

            <a href="https://tailwindcss.com/"
              class="px-3 py-2 text-sm font-semibold text-black transition-all duration-300 ease-in-out border border-black rounded-md shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black focus:outline-none focus:shadow-outlinetransform hover:scale-105">
              Tailwind CSS
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class="relative py-10 bg-zinc-300 sm:py-16 lg:py-24 lg:pt-36">
    <div class="px-4 mx-auto space-y-5 text-center max-w-7xl sm:px-6 lg:px-8 md:space-y-10">
      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6">
        <RouterLink v-for="project in displayedProjects" :key="project.path" :to="project.path"
          class="flex items-center justify-center px-4 py-3 font-medium text-blue-600 transition-colors duration-300 bg-white rounded-md shadow-md hover:text-blue-800">
          {{ project.label }}
        </RouterLink>
      </div>

      <div v-if="displayedProjects.length < projects.length" class="flex justify-center mt-10 md:mt-20">
        <button @click="showMoreProjects"
          class="px-3 py-2 text-sm font-semibold text-black transition-all duration-300 ease-in-out border border-black rounded-md shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black focus:outline-none focus:shadow-outlinetransform hover:scale-105">
          show more...
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";

const projects = ref([
  
  { label: "Age Validation", path: "/agevalidation" },
  { label: "Counter", path: "/counterapp" },
  { label: "Date Picker 180 Days", path: "/datepickerwith180days" },
  { label: "Random Color", path: "/randomcolorgenerator" },
  { label: "Random Quotes", path: "/randomquotes" },
  { label: "Toggle Password", path: "/togglepasswordvisibility" },
  { label: "Password Generator", path: "/passwordgenerator" },
  { label: "Language Display", path: "/languagedisplay" },
  { label: "Currency Converter", path: "/currencyconverter" },
  { label: "Leap Year Checker", path: "/leapyearchecker" },
  { label: "Form Validation", path: "/formvalidation" },
  { label: "Tip Calculator", path: "/tipcalculator" },
  { label: "Infinite Scroll", path: "/infinitescroll" },
  { label: "Stop Watch", path: "/stopwatch" },
  { label: "Student Crud", path: "/studentcrud" },
  { label: "Digital Clock", path: "/digitalclock" },
  { label: "Country Details", path: "/countrydetails" },
  { label: "Product List", path: "/productlist" },
  { label: "Product List SSF", path: "/productlistssf" },
  { label: "Password Strength", path: "/passwordstrengthchecker" },
  { label: "Random Users", path: "/randomusers" },
  { label: "Weather Status", path: "/weatherstatus" },
]);

const visibleProjectsCount = ref(8);

const displayedProjects = computed(() => {
  return projects.value.slice(0, visibleProjectsCount.value);
});

const showMoreProjects = () => {
  visibleProjectsCount.value += 4;
};
</script>