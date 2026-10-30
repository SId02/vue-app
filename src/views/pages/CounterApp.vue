
<style lang="postcss" scoped>
.btn {
  @apply py-3 px-4 text-xs font-semibold rounded-xl shadow-sm transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2;
}

.btn-primary {
  @apply bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-500/25 focus:ring-indigo-500;
}

.btn-secondary {
  @apply bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 focus:ring-slate-400;
}

.btn-danger {
  @apply bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200/60 focus:ring-rose-500;
}
</style>
<template>
  <div class="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between">
    
    <!-- Top Bar Navigation -->
    <div class="max-w-4xl w-full mx-auto px-6 pt-6">
      <router-link
        to="/"
        class="inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200/80 rounded-xl shadow-sm hover:bg-slate-100 transition-all"
      >
        ← Back to Home
      </router-link>
    </div>

    <!-- Main Content Container -->
    <main class="flex-1 flex items-center justify-center px-4 py-12">
      <div class="w-full max-w-md">
        
        <!-- Card Container -->
        <div class="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/80 text-center space-y-8">
          
          <div>
            <h1 class="text-2xl font-extrabold tracking-tight text-slate-900">Interactive Counter</h1>
            <p class="text-sm text-slate-500 mt-1">Increment, decrement, or reset your count instantly</p>
          </div>

          <!-- Count Display Box -->
          <div class="py-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-inner">
            <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Current Count</span>
            <span class="text-6xl font-black font-mono tracking-tight transition-colors duration-300" :style="{ color: countColor }">
              {{ count }}
            </span>
          </div>

          <!-- Action Buttons -->
          <div class="grid grid-cols-3 gap-3">
            <button class="btn btn-primary" @click="incrementCount">
              + Add
            </button>
            <button class="btn btn-secondary" @click="resetCount">
              Reset
            </button>
            <button class="btn btn-danger" @click="decrementCount">
              - Sub
            </button>
          </div>

        </div>

      </div>
    </main>

    <!-- Minimalist Footer -->
    <footer class="py-8 bg-white border-t border-slate-200/80 text-center">
      <div class="max-w-7xl mx-auto px-4 flex justify-center items-center">
        <div class="flex items-center space-x-1 font-medium text-slate-500 text-xs sm:text-sm">
          <span>Built with</span>
          <span class="text-indigo-600 font-semibold">Vue 3 Composition API</span>
          <span>&</span>
          <span class="text-slate-800 font-semibold">Tailwind CSS</span>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const count = ref(0);

const countColor = computed(() => {
  if (count.value > 0) return '#16a34a'; // Emerald Green
  else if (count.value < 0) return '#dc2626'; // Red
  else return '#64748b'; // Slate Gray for 0
});

const incrementCount = () => {
  count.value++;
};

const decrementCount = () => {
  count.value--;
};

const resetCount = () => {
  count.value = 0;
};
</script>
