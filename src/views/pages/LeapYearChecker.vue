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
    <section class="flex flex-col items-center justify-center h-screen">
      
      <div class="container p-5 text-center">
        <h1 class="text-3xl font-bold">Leap Year Checker</h1>
      </div>
      <div class="container p-6">
        <div class="flex justify-center">
          <div class="w-1/2 p-4 bg-white rounded shadow-md">
            <div class="field">
              <div class="control">
                <input
                  type="number"
                  class="w-full p-2 pl-10 text-sm text-gray-700 input"
                  placeholder="Enter a year"
                  v-model="year"
                />
              </div>
            </div>
            <p class="p-3 m-2 notification" v-if="message">{{ message }}</p>
            <button
              class="w-full p-2 text-sm text-white bg-blue-500 button is-primary is-outlined hover:bg-blue-700"
              @click="checkLeapYear"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      
    </section>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const year = ref('');
      const message = ref('');
  
      const checkLeapYear = () => {
        const isLeapYear = new Date(year.value, 1, 29).getMonth() === 1;
        const messageText = isLeapYear
         ? `The year ${year.value} is a leap year.`
          : `The year ${year.value} is not a leap year.`;
        message.value = messageText;
      };
  
      return {
        year,
        message,
        checkLeapYear,
      };
    },
  };
  </script>