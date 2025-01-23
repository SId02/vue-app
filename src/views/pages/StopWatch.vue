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
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div class="p-8 text-center bg-white rounded-lg shadow-md">
    
        <h3 class="mb-6 text-4xl font-bold tracking-wider">
          {{ formattedTime }}
        </h3>
        <div class="flex justify-center space-x-4">
          <button 
            @click="handleStartStop" 
            :class="[
              'px-6 py-2 rounded-lg text-white font-semibold transition duration-300',
              isRunning 
                ? 'bg-red-500 hover:bg-red-600' 
                : 'bg-green-500 hover:bg-green-600'
            ]"
          >
            {{ isRunning ? 'Stop' : 'Start' }}
          </button>
          <button 
            @click="handleReset"
            class="px-6 py-2 font-semibold text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  </div>
  </template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'

const isRunning = ref(false)
const seconds = ref(0)
const minutes = ref(0)
const hours = ref(0)


let intervalId = null

const formattedTime = computed(() => {
  const formatNumber = (num) => String(num).padStart(2, '0')
  return `${formatNumber(hours.value)}:${formatNumber(minutes.value)}:${formatNumber(seconds.value)}`
})
const handleStartStop = () => {
  isRunning.value = !isRunning.value

  if (isRunning.value) {
    startTimer()
  } else {
    stopTimer()
  }
}
const startTimer = () => {
  intervalId = setInterval(() => {
    seconds.value++

    if (seconds.value === 60) {
      seconds.value = 0
      minutes.value++

      if (minutes.value === 60) {
        minutes.value = 0
        hours.value++
      }
    }
  }, 1000)
}
const stopTimer = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}
const handleReset = () => {
  stopTimer()
  isRunning.value = false
  seconds.value = 0
  minutes.value = 0
  hours.value = 0
}
onUnmounted(() => {
  stopTimer()
})
</script>