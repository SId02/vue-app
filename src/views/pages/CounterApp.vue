
<style scoped>
.card {
  @apply shadow-md rounded;
}

.card-content {
  @apply p-4;
}

.card-footer {
  @apply p-4;
}

.btn {
  @apply px-4 py-2 rounded;
}

.btn-primary {
  @apply bg-blue-500 hover:bg-blue-700 text-white;
}

.btn-secondary {
  @apply bg-gray-500 hover:bg-gray-700 text-white;
}

.btn-danger {
  @apply bg-red-500 hover:bg-red-700 text-white;
}
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
    <div class="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] bg-gray-100">
    <div class="container p-5 mx-auto bg-yellow-300">
      
    <section class="section">
      <div class="container mx-auto">
        <div class="flex justify-center mb-5">
          <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <h3 class="mb-4 text-3xl font-bold text-center">Counter</h3>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <div class="bg-white rounded shadow-md card">
              <div class="p-4 card-content">
                <div class="text-center content">
                  <p class="mb-4 text-4xl font-bold" :style="{ color: countColor }">
                    {{ count }}
                  </p>
                </div>
              </div>
              <footer class="p-4 card-footer">
                <button class="mr-2 btn btn-primary" @click="incrementCount">
                  Increment + <i class="fa-solid fa-plus"></i>
                </button>
                <button class="mr-2 btn btn-secondary" @click="resetCount">
                  Reset <i class="fa-solid fa-rotate"></i>
                </button>
                <button class="btn btn-danger" @click="decrementCount">
                  Decrement - <i class="fa-solid fa-minus"></i>
                </button>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
</div> 
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const count = ref(0);

    const countColor = computed(() => {
      if (count.value > 0) return 'green';
      else if (count.value < 0) return 'red';
      else return 'grey';
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

    return {
      count,
      countColor,
      incrementCount,
      decrementCount,
      resetCount,
    };
  },
};
</script>
