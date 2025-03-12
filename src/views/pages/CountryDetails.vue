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
    <section class="py-6">
      <div class="container pb-5 text-center">
        <h1 class="mb-4 text-3xl font-bold">Country Details</h1>
      </div>
      <div class="container p-4 pt-6 mx-auto md:p-6 lg:px-16 xl:px-20">
        <div class="flex justify-center">
          <div class="w-full max-w-md">
            <select
              class="block w-full p-2 pl-10 text-sm text-gray-700 border border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              v-model="selectedCountry"
              @change="handleCountryChange"
            >
              <option value="">Select a country...</option>
              <option v-for="country in countries" :key="country.name.common" :value="country.name.common">
                {{ country.name.common }}
              </option>
            </select>
            <div v-if="Object.keys(countryData).length > 0" class="p-4 mt-4 bg-white rounded-lg shadow-md">
              <h2 class="mb-4 text-2xl font-bold">{{ countryData.name.common }}</h2>
              <hr class="my-4" />
              <p>Capital: {{ countryData.capital ? countryData.capital[0] : 'N/A' }}</p>
              <p>Region: {{ countryData.region }}</p>
              <p>Population: {{ countryData.population }}</p>
              <p v-if="countryData.languages" class="mt-2">
                Languages:
                <span v-for="(lang, index) in countryData.languages" :key="index">
                  {{ lang }}
                  <span v-if="index < Object.keys(countryData.languages).length - 1">, </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
</div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        countries: [],
        selectedCountry: '',
        countryData: {},
      };
    },
    mounted() {
      this.fetchData();
    },
    watch: {
      selectedCountry(newValue) {
        this.handleCountryChange(newValue);
      },
    },
    methods: {
      async fetchData() {
        try {
          const response = await axios.get('https://restcountries.com/v3.1/all');
          this.countries = response.data;
        } catch (error) {
          console.error('Error fetching countries: ', error);
        }
      },
      handleCountryChange() {
        const country = this.countries.find((country) => country.name.common === this.selectedCountry);
        this.countryData = country ? country : {};
      },
    },
  };
  </script>