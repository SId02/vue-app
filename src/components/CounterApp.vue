<script>
import { ref } from 'vue'

export default {
  setup() {
    const number = ref(0)

    const increment = () => {
      number.value++
    }

    const decrement = () => {
      number.value--
    }

    return {
      number,

      increment,

      decrement
    }
  }
}
</script>

<template>
  <div class="flex items-center justify-center h-screen bg-yellow-300">
    <div class="text-4xl">
      Hello 👋

      <button @click="increment">Increment</button>

      {{ number }}

      <button class="px-4 py-2 text-white bg-red-600 focus:outline-none" @click="decrement">
        Decrement
      </button>
    </div>
  </div>
</template>
