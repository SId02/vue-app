<style scoped></style>
<template>
  <section class="min-h-screen py-8 bg-blue-100">
    <div class="container px-4 mx-auto">
      <div class="max-w-4xl p-6 mx-auto bg-white rounded-lg shadow-lg">
        <h1 class="mb-6 text-4xl font-bold text-center text-blue-800">Weather Status</h1>

        <div class="mb-6 text-center">
          <div class="inline-flex rounded-md shadow-sm">
            <button
              @click="showWorldCities = true"
              :class="[
                'px-6 py-3 text-lg font-medium rounded-l-lg focus:outline-none',
                showWorldCities ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              ]"
            >
              Top World Cities
            </button>
            <button
              @click="showWorldCities = false"
              :class="[
                'px-6 py-3 text-lg font-medium rounded-r-lg focus:outline-none',
                !showWorldCities ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              ]"
            >
              Top Indian Cities
            </button>
          </div>
        </div>

        <div class="mb-8">
          <h2 class="mb-4 text-xl font-semibold">
            {{ showWorldCities ? 'Top 10 Cities in the World' : 'Top 10 Cities in India' }}
          </h2>
          <div v-if="loadingTopCities" class="text-center">
            <div class="w-12 h-12 mx-auto border-b-2 border-blue-500 rounded-full animate-spin"></div>
          </div>
          <div v-else class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div
              v-for="data in (showWorldCities ? worldCitiesWeather : indiaCitiesWeather)"
              :key="data.city"
              :class="[
                'p-4 rounded-lg shadow-md cursor-pointer transform transition duration-200 hover:scale-105',
                showWorldCities ? 'bg-blue-50 text-blue-800' : 'bg-indigo-50 text-indigo-800'
              ]"
              @click="handleCitySuggestion(data.city)"
            >
              <strong class="text-lg">{{ data.city }}, {{ data.country }}</strong>
              <div class="flex items-center mt-2">
                <i class="text-xl text-yellow-500 fas fa-thermometer-half"></i>
                <strong class="ml-2 text-xl">{{ data.temperature }}°C</strong>
              </div>
              <div class="flex items-center mt-1">
                <i class="text-blue-500 fas fa-cloud"></i>
                <span class="ml-2">{{ weatherDescriptions[data.weathercode] || 'Unknown' }}</span>
              </div>
              <div class="flex items-center mt-1">
                <i class="text-gray-500 fas fa-wind"></i>
                <span class="ml-2">{{ data.windspeed }} km/h</span>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center mb-6">
          <div class="relative flex-grow max-w-md">
            <input
              type="text"
              class="w-full px-4 py-3 pr-10 text-lg border-2 border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter city name..."
              v-model="city"
              @keyup.enter="handleSearch"
            />
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <i class="text-gray-400 fas fa-city"></i>
            </span>
          </div>
          <button
            @click="handleSearch"
            :class="[
              'px-6 py-3 text-lg font-medium rounded-r-lg focus:outline-none transition duration-200',
              loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'
            ]"
            :disabled="loading"
          >
            {{ loading ? 'Searching...' : 'Search' }}
          </button>
        </div>

        <div v-if="loading && !loadingTopCities" class="my-8 text-center">
          <div class="w-16 h-16 mx-auto border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
        </div>

        <div v-if="weatherData && !loading" class="max-w-md p-6 mx-auto mt-8 rounded-lg shadow-inner weather-info bg-gray-50">
          <div class="mb-4 text-center">
            <h2 class="mb-2 text-3xl font-bold text-blue-700">{{ weatherData.city }}, {{ weatherData.country }}</h2>
            <p class="flex items-center justify-center text-5xl font-extrabold text-yellow-600">
              <i class="mr-3 text-yellow-500 fas fa-thermometer-half"></i>
              {{ weatherData.temperature }}°C
            </p>
            <p class="flex items-center justify-center mt-2 text-xl text-blue-600">
              <i class="mr-2 fas fa-cloud"></i>
              {{ weatherDescriptions[weatherData.weathercode] || 'Unknown Condition' }}
            </p>
          </div>
          <div class="text-center">
            <p class="flex items-center justify-center text-lg text-gray-700">
              <i class="mr-2 fas fa-wind"></i>
              Wind Speed: <strong class="ml-2">{{ weatherData.windspeed }} km/h</strong>
            </p>
          </div>
        </div>

        <div v-if="errorMessage" class="relative px-4 py-3 mt-6 text-center text-red-700 bg-red-100 border border-red-400 rounded">
          {{ errorMessage }}
        </div>

        <div class="mt-10 text-center text-gray-600">
          <p>
            Powered by
            <a href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">
              Open-Meteo
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const weatherDescriptions = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Fog',
  48: 'Depositing rime fog',
  51: 'Drizzle: Light',
  61: 'Rain: Slight',
  63: 'Rain: Moderate',
  65: 'Rain: Heavy',
  80: 'Rain showers: Slight',
  95: 'Thunderstorm',
  99: 'Thunderstorm: Heavy hail',
};

const topWorldCities = [
  'New York', 'London', 'Tokyo', 'Paris', 'Dubai',
  'Singapore', 'Hong Kong', 'Sydney', 'Los Angeles'
];

const topIndiaCities = [
  'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai',
  'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow'
];

const city = ref('');
const weatherData = ref(null);
const errorMessage = ref('');
const loading = ref(false);

const worldCitiesWeather = ref([]);
const indiaCitiesWeather = ref([]);
const loadingTopCities = ref(true);

const showWorldCities = ref(true);

const fetchWeatherForCity = async (cityName) => {
  try {
    const geoRes = await axios.get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`
    );
    if (geoRes.data.results && geoRes.data.results.length > 0) {
      const { latitude, longitude, name, country } = geoRes.data.results[0];
      const weatherRes = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      return {
        city: name,
        country,
        ...weatherRes.data.current_weather
      };
    }
  } catch (err) {
    console.error(`Error fetching weather for ${cityName}:`, err);
    return null;
  }
};

const getCoordinates = async (cityName) => {
  errorMessage.value = '';
  weatherData.value = null;
  loading.value = true;
  try {
    const response = await axios.get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`
    );
    if (response.data.results && response.data.results.length > 0) {
      const { latitude, longitude, name, country } = response.data.results[0];
      await getWeather(latitude, longitude, name, country);
    } else {
      throw new Error('Location not found. Please check the city name.');
    }
  } catch (error) {
    loading.value = false;
    errorMessage.value = error.message;
  }
};

const getWeather = async (latitude, longitude, cityName, countryName) => {
  try {
    const response = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    weatherData.value = { ...response.data.current_weather, city: cityName, country: countryName };
  } catch (error) {
    errorMessage.value = 'Weather data not available for this location.';
  } finally {
    loading.value = false;
  }
};

const handleSearch = () => {
  if (city.value.trim()) {
    getCoordinates(city.value);
  } else {
    errorMessage.value = 'Please enter a city name.';
  }
};

const handleCitySuggestion = (cityName) => {
  city.value = cityName;
  getCoordinates(cityName);
};

onMounted(async () => {
  loadingTopCities.value = true;
  const worldPromises = topWorldCities.map(fetchWeatherForCity);
  const indiaPromises = topIndiaCities.map(fetchWeatherForCity);

  const worldResults = await Promise.all(worldPromises);
  const indiaResults = await Promise.all(indiaPromises);

  worldCitiesWeather.value = worldResults.filter(Boolean);
  indiaCitiesWeather.value = indiaResults.filter(Boolean);
  loadingTopCities.value = false;
});
</script>