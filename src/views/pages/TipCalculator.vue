<style>
 
</style>
<template>
  <div>
    <!--  -->
    <router-link to="/" class="w-full p-2 mt-4 text-sm text-center text-white bg-gray-500 rounded hover:bg-gray-700">
            Back to Home
          </router-link>
        <!--  -->  
  </div>
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