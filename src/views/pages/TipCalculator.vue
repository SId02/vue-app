<style>
 
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

    <section>
      <div class="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] bg-gray-100">

    
  <div class="container p-4 mx-auto">
      <h1 class="mb-4 text-2xl font-bold">Tip Calculator</h1>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="bill-amount" class="block mb-2">Bill Amount:</label>
          <input
            v-model="billAmount"
            type="number"
            id="bill-amount"
            class="w-full p-2 border"
            placeholder="Enter bill amount"
          />
        </div>
        <div>
          <label for="tip-percentage" class="block mb-2">Tip Percentage:</label>
          <select
            v-model="tipPercentage"
            id="tip-percentage"
            class="w-full p-2 border"
          >
            <option value="5">5%</option>
            <option value="10">10%</option>
            <option value="15">15%</option>
            <option value="20">20%</option>
            <option value="25">25%</option>
          </select>
        </div>
      </div>
      <div class="mt-4">
        <p class="font-bold">Tip Amount:</p>
        <p class="font-bold">{{ calculatedTipAmount }}</p>
      </div>
      <div class="mt-2">
        <p class="font-bold">Total Amount:</p>
        <p class="font-bold">{{ calculatedTotalAmount }}</p>
      </div>
    </div>
  </div>
</section>
  </div>
  </template>
   <script>
   import { ref, computed } from 'vue';

   export default {
     setup() {
       const billAmount = ref(0);
       const tipPercentage = ref(10);

       const calculatedTipAmount = computed(() => {
         return billAmount.value * (tipPercentage.value / 100);
       });

       const calculatedTotalAmount = computed(() => {
         return billAmount.value + calculatedTipAmount.value;
       });

       return {
         billAmount,
         tipPercentage,
         calculatedTipAmount,
         calculatedTotalAmount,
       };
     },
   };
   </script>