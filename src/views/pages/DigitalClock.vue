<style scoped>


</style>
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

    <div class="container p-2 text-center">
        <h1 class="text-3xl">Digital Clock</h1>
      </div>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
    
      <div class="p-8 text-center bg-white shadow-2xl rounded-xl w-96">
  
        <h1 class="mb-4 text-5xl font-bold text-blue-600">
          {{ dateTime.time }}
        </h1>
        <h2 class="mb-2 text-2xl font-semibold text-blue-500">
          {{ dateTime.day }}
        </h2>
        <h3 class="text-xl text-gray-600">
          {{ dateTime.date }}
        </h3>
      </div>
    </div>
  </div>
  </template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const dateTime = ref({
  time: '',
  date: '',
  day: ''
})
const updateDateTime = () => {
  const now = new Date()
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }

  dateTime.value = {
    time: now.toLocaleTimeString(),
    date: now.toLocaleDateString(undefined, options),
    day: now.toLocaleDateString(undefined, { weekday: 'long' })
  }
}
let intervalId = null
onMounted(() => {

  updateDateTime()
  intervalId = setInterval(updateDateTime, 1000)
})
onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>