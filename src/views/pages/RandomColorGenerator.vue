
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translate(-50%, 4px);
}
</style>
<template>
  <div class="min-h-screen bg-slate-50 text-slate-800 flex flex-col transition-colors duration-500" :style="{ backgroundColor: currentBgTint }">
    
    <!-- Top Bar Navigation -->
    <div class="max-w-4xl w-full mx-auto px-6 pt-6">
      <router-link
        to="/"
        class="inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-xl shadow-sm hover:bg-white transition-all"
      >
        ← Back to Home
      </router-link>
    </div>

    <!-- Main Generator Container -->
    <main class="flex-1 flex items-center justify-center px-4 py-12">
      <div class="w-full max-w-md">
        
        <!-- Card Box with dynamic border accent matching the selected color -->
        <div 
          class="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/20 transition-all duration-300"
        >
          
          <div class="text-center mb-8">
            <h1 class="text-2xl font-extrabold tracking-tight text-slate-900">Color Studio</h1>
            <p class="text-sm text-slate-500 mt-1">Generate random HEX colors and copy them instantly</p>
          </div>

          <!-- Color Preview & Hex Display Box -->
          <div class="flex items-center justify-between p-4 bg-slate-100/80 rounded-2xl border border-slate-200/60 mb-6">
            <div class="flex items-center space-x-3">
              <!-- Visual color swatch circle -->
              <div 
                class="w-10 h-10 rounded-full shadow-inner border border-black/10 transition-colors duration-300"
                :style="{ backgroundColor: color }"
              ></div>
              <div>
                <span class="block text-xs font-semibold text-slate-400 uppercase tracking-wider">HEX Code</span>
                <span class="font-mono text-lg font-bold text-slate-800">{{ color }}</span>
              </div>
            </div>

            <!-- Copy Button with dynamic copied tooltip state -->
            <div class="relative">
              <button
                @click="copyToClipboard"
                class="p-3 text-slate-600 bg-white hover:bg-slate-50 active:scale-95 rounded-xl shadow-sm border border-slate-200/80 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500"
                title="Copy to clipboard"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </button>

              <!-- Copied Notification Popup -->
              <transition name="fade">
                <span 
                  v-if="copied" 
                  class="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 text-xs font-semibold text-white bg-slate-900 rounded-lg shadow-md whitespace-nowrap"
                >
                  Copied! 🎉
                </span>
              </transition>
            </div>
          </div>

          <!-- Generate Button -->
          <button
            @click="generateColor"
            class="w-full py-3.5 px-4 text-white font-medium bg-indigo-600 hover:bg-indigo-700 active:scale-[0.99] rounded-xl shadow-lg shadow-indigo-500/25 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Generate Random Color
          </button>

        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
const color = ref('#6366F1') // Default starting color (Indigo)
const copied = ref(false)

// Subtle background tint that shifts slightly based on the selected color
const currentBgTint = computed(() => {
  return `${color.value}0A` // Appends low opacity alpha hex code for smooth ambient background tint
})

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
