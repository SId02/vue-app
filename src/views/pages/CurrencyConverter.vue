<style scoped>
/* Add your custom styles here */
</style>
<template>
<div>
  <!--  -->
  <router-link to="/" class="w-full p-2 mt-4 text-sm text-center text-white bg-gray-500 rounded hover:bg-gray-700">
            Back to Home
          </router-link>
        <!--  -->  
</div>
    <section class="flex justify-center h-screen">
      <div class="container max-w-md p-5 mx-auto">
        <h1 class="mb-4 text-3xl font-bold">Currency Converter</h1>
        <form class="flex flex-wrap -mx-3">
          <div class="w-full px-3 mb-6 md:w-1/2">
            <label for="from-currency" class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">From Currency:</label>
            <select v-model="fromCurrency" class="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white">
              <option v-for="currency in exchangeRates" :key="currency" :value="currency">{{ currency }}</option>
            </select>
          </div>
          <div class="w-full px-3 mb-6 md:w-1/2">
            <label for="to-currency" class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">To Currency:</label>
            <select v-model="toCurrency" class="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white">
              <option v-for="currency in exchangeRates" :key="currency" :value="currency">{{ currency }}</option>
            </select>
          </div>
          <div class="w-full px-3 mb-6 md:w-1/2">
            <label for="amount" class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">Amount:</label>
            <input type="number" v-model.number="amount" class="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white" id="amt" placeholder="0000">
          </div>
          <div class="w-full px-3 mb-6 md:w-1/2">
            <label for="converted-amount" class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">Converted Amount:</label>
            <p class="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white" readonly>{{ convertedAmount }}</p>
          </div>
        </form>
      </div>
    </section>
  </template>
  
  <script>
  import { ref, computed, watch } from 'vue';
  import axios from 'axios';
  
  export default {
    name: 'CurrencyConverter',
    setup() {
      const exchangeRates = ref({});
      const amount = ref(1);
      const fromCurrency = ref('USD');
      const toCurrency = ref('INR');
      const convertedAmount = ref(null);
  
      watch(() => ({ fromCurrency, toCurrency, amount }), (values, prevValues) => {
        const conversionRate = exchangeRates.value[toCurrency.value];
        if (conversionRate) {
          convertedAmount.value = (amount.value * conversionRate).toFixed(2);
        }
      }, { deep: true });
  
      axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency.value}`)
        .then((response) => {
          exchangeRates.value = response.data.rates;
        })
        .catch((error) => {
          console.error('Error in fetching currency exchange rate:', error);
        });
  
      return {
        exchangeRates,
        amount,
        fromCurrency,
        toCurrency,
        convertedAmount,
      };
    },
  };
  </script>
  
 