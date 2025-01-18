
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
    
      <section class="p-5">
        <div class="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] bg-gray-100"> 
      <div class="container p-5 text-center">
        <h1 class="text-3xl">Age Validation</h1>
      </div>
  
      <div class="container flex justify-center p-6">
        <div class="w-1/3 p-6 bg-white rounded-lg shadow-md">
          <form @submit.prevent>
            <input
              type="number"
              v-model.number="age"
              max="999"
              @input="handleInputChange"
              class="w-full p-2 border border-gray-300 rounded-md"
            />
            <p
              v-if="message"
              class="p-3 mt-3 rounded-md"
              :class="
                message.includes('18')
                  ? 'bg-red-500 text-white'
                  : 'bg-yellow-500 text-black'
              "
            >
              {{ message }}
            </p>
          </form>
        </div>
      </div>
    </div>
    </section>
  </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default  {
    setup() {
      const age = ref('');
      const message = ref('');
  
      const handleInputChange = () => {
        if (age.value < 18) {
          message.value = 'You are not yet 18 years old.';
        } else if (age.value >= 60 && age.value < 75) {
          message.value = 'You are a senior citizen aged 60 or 75 years old.';
        } else if (age.value >= 75) {
          message.value = 'You are a senior citizen aged 75 or above.';
        } else {
          message.value = '';
        }
      };
  
      return {
        age,
        message,
        handleInputChange,
      };
    },
  };
  </script>
  