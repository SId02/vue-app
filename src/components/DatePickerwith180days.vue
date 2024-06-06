<template>
    <div class="container p-5 mx-auto">
      <h1 class="mb-5 text-3xl text-center">Date Validation for 180 days</h1>
      <div class="flex justify-center">
        <div class="w-1/3 p-6 bg-white rounded-lg shadow-md">
          <form @submit.prevent="handleSubmit">
            <div class="mb-4">
              <label for="date" class="block mb-2 font-bold text-gray-700"
                >Date</label
              >
              <input
                type="date"
                id="date"
                v-model="date"
                class="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                :min="currentDate"
              />
            </div>
            <div v-if="error" class="mb-4 text-red-500">
              {{ error }}
            </div>
            <div class="flex justify-center">
              <button
                type="submit"
                class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const date = ref('');
      const error = ref('');
      const currentDate = ref(new Date().toISOString().split('T')[0]);
  
      const handleSubmit = () => {
        const maxDate = new Date();
        maxDate.setDate(maxDate.getDate() + 180);
  
        if (date.value === '') {
          error.value = 'Date is required';
        } else if (new Date(date.value) > maxDate) {
          error.value = 'Date must be within 180 days from today';
        } else {
          error.value = '';
        }
      };
  
      return {
        date,
        error,
        currentDate,
        handleSubmit,
      };
    },
  };
  </script>
  