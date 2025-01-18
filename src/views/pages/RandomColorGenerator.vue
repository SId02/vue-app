<style></style>
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

    <section>
      <div class="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] bg-gray-100">
        <div class="w-full max-w-md p-6 rounded-lg shadow-lg" :style="{ backgroundColor: color }">
          <div class="p-4 mb-4 bg-white rounded-lg">
            <div class="flex items-center justify-between">
              <h2 class="text-xl font-bold">Random Color Generator</h2>
              <span class="px-3 py-1 font-mono text-lg bg-gray-100 rounded">
                {{ color }}
              </span>
            </div>
            <button
              @click="copyToClipboard"
              class="p-2 mt-2 transition bg-gray-200 rounded hover:bg-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </button>
          </div>

          <button
            @click="generateColor"
            class="w-full py-3 text-black transition bg-white rounded-lg hover:bg-gray-100"
          >
            Generate Random Color
          </button>
        </div>
      </div>
    </section>
  </div>
</template>



<!-- 
<template>

   
  <div>
    <router-link
      to="/"
      class="w-full p-2 mt-4 text-sm text-center text-white bg-gray-500 rounded hover:bg-gray-700"
    >
      Back to Home
    </router-link>
  </div>
 
  <section>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div class="w-full max-w-md p-6 rounded-lg shadow-lg" :style="{ backgroundColor: color }">
        <div class="p-4 mb-4 bg-white rounded-lg">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-bold">Random Color Generator</h2>
            <span class="px-3 py-1 font-mono text-lg bg-gray-100 rounded">
              {{ color }}
            </span>
          </div>
          <button
            @click="copyToClipboard"
            class="p-2 mt-2 transition bg-gray-200 rounded hover:bg-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </button>
        </div>

        <button
          @click="generateColor"
          class="w-full py-3 text-black transition bg-white rounded-lg hover:bg-gray-100"
        >
          Generate Random Color
        </button>
      </div>
    </div>
  </section>
</template>  -->

<script setup>
import { ref } from 'vue'

const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
const color = ref('#000000')
const copied = ref(false)

const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length)
}

const generateColor = () => {
  let hexColor = '#'
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()]
  }
  color.value = hexColor
}

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(color.value)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy!', err)
  }
}
</script>
