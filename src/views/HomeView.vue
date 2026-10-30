<template>
  <div class="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between">
    
    <!-- Hero Section -->
    <header class="relative overflow-hidden px-6 pt-16 pb-12 lg:px-8 border-b border-slate-200/60 bg-white">
      <div class="max-w-3xl mx-auto text-center space-y-6">    
        <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl leading-tight">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">Vue 3 & Tailwind 3.4.19</span>
        </h1>
        
        <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          A collection of interactive components built to master Vue Router 4 , Composition API, reactive state management, and modern API integrations.
        </p>

        <div class="flex items-center justify-center gap-3 pt-2">
          <a
            href="https://vuejs.org/"
            target="_blank"
            class="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-xl shadow-sm hover:bg-slate-800 transition-all hover:scale-105 active:scale-95"
          >
            Vue.js 3
          </a>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            class="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl shadow-sm hover:bg-slate-50 transition-all hover:scale-105 active:scale-95"
          >
            Tailwind CSS
          </a>
          <a
            href="https://router.vuejs.org/"
            target="_blank"
            class="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-xl shadow-sm hover:bg-slate-800 transition-all hover:scale-105 active:scale-95"
          >
            Vue Router 4
          </a>
        </div>
      </div>
    </header>

    <!-- Projects Section -->
    <main class="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div class="space-y-8">
        
        <!-- Grid List of Projects -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <RouterLink
            v-for="project in displayedProjects"
            :key="project.path"
            :to="project.path"
            class="group relative flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            <span class="font-medium text-slate-800 group-hover:text-indigo-600 transition-colors text-sm">
              {{ project.label }}
            </span>
            <span class="text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all">
              →
            </span>
          </RouterLink>
        </div>

        <!-- Show More Action Button -->
        <div v-if="displayedProjects.length < projects.length" class="flex justify-center pt-8">
          <button
            @click="showMoreProjects"
            class="px-6 py-3 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-2xl shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Show More Projects ({{ projects.length - displayedProjects.length }} remaining) ↓
          </button>
        </div>
      </div>
    </main>
  </div>
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
  { label: "Product List", path: "/productlist" },
  { label: "Product List SSF", path: "/productlistssf" },
  { label: "Random Users", path: "/randomusers" },
  { label: "Weather Status", path: "/weatherstatus" },
  { label: "Dynamic Form", path: "/dynamicform" },
]);

const visibleProjectsCount = ref(8);

const displayedProjects = computed(() => {
  return projects.value.slice(0, visibleProjectsCount.value);
});

const showMoreProjects = () => {
  visibleProjectsCount.value += 4;
};
</script>