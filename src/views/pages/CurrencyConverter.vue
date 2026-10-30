<style scoped>
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
    <section class="flex justify-center h-screen">
      <div class="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] bg-gray-100 w-full rounded-lg">
        <div class="container max-w-md p-5 mx-auto bg-white shadow-md rounded-lg">
          <h1 class="mb-4 text-3xl font-bold text-gray-800">Currency Converter</h1>
          
          <form class="flex flex-wrap -mx-3" @submit.prevent>
            <!-- From Currency -->
            <div class="w-full px-3 mb-6 md:w-1/2">
              <label for="from-currency" class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">From Currency:</label>
              <select v-model="fromCurrency" id="from-currency" class="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white">
                <option v-for="currency in currencyList" :key="currency" :value="currency">{{ currency }}</option>
              </select>
            </div>

            <!-- To Currency -->
            <div class="w-full px-3 mb-6 md:w-1/2">
              <label for="to-currency" class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">To Currency:</label>
              <select v-model="toCurrency" id="to-currency" class="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white">
                <option v-for="currency in currencyList" :key="currency" :value="currency">{{ currency }}</option>
              </select>
            </div>

            <!-- Amount Input -->
            <div class="w-full px-3 mb-6 md:w-1/2">
              <label for="amount" class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">Amount:</label>
              <input type="number" v-model.number="amount" class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white" id="amount" placeholder="1">
            </div>

            <!-- Converted Amount Display -->
            <div class="w-full px-3 mb-6 md:w-1/2">
              <label for="converted-amount" class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">Converted Amount:</label>
              <div class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded">
                {{ convertedAmount }}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed, watch, onMounted } from 'vue';

export default {
  name: 'CurrencyConverter',
  setup() {
    const exchangeRates = ref({});
    const amount = ref(1);
    const fromCurrency = ref('USD');
    const toCurrency = ref('INR');

    // Fetch exchange rates using native Fetch API
    const fetchRates = async (baseCurrency) => {
      try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        exchangeRates.value = data.rates;
      } catch (error) {
        console.error('Error in fetching currency exchange rate:', error);
      }
    };

    // Extract currency codes (keys) from the fetched rates object for dropdown options
    const currencyList = computed(() => Object.keys(exchangeRates.value));

    // Automatically compute the converted amount in real-time
    const convertedAmount = computed(() => {
      const rate = exchangeRates.value[toCurrency.value];
      if (rate && typeof amount.value === 'number') {
        return (amount.value * rate).toFixed(2);
      }
      return '0.00';
    });

    // Fetch rates on initial component mount
    onMounted(() => {
      fetchRates(fromCurrency.value);
    });

    // Re-fetch rates whenever the base ('from') currency changes
    watch(fromCurrency, (newBase) => {
      fetchRates(newBase);
    });

    return {
      exchangeRates,
      currencyList,
      amount,
      fromCurrency,
      toCurrency,
      convertedAmount,
    };
  },
};
</script>

