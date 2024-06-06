<script setup>
import AgeValidation from '../components/AgeValidation.vue';
import DataPickerwith180days from '../components/DatePickerwith180days.vue';
import TogglePasswordVisibility from '../components/TogglePasswordVisibility.vue';
import RandomQuotes from '../components/RandomQuotes.vue';
import CounterApp from '@/components/CounterApp.vue';
</script>
<template>
  <div class="bg-blue-100 rounded-lg shadow-md about">
    <h1 class="text-3xl text-center text-blue-900">This is an Project page</h1>
    <p></p>
  </div>

  <div class="comp">
    <AgeValidation class="p-6 bg-white rounded-lg shadow-md" />
  </div>

  <div class="comp">
    <DataPickerwith180days class="p-6 bg-white rounded-lg shadow-md" />
  </div>
  <div class="comp">
    <TogglePasswordVisibility class="p-6 bg-white rounded-lg shadow-md" />
  </div>

  <div class="comp">
    <RandomQuotes class="p-6 bg-white rounded-lg shadow-lg" />
  </div>
  <div class="comp">
    <CounterApp class="p-6 bg-white rounded-lg shadow-lg" />
  </div>
  <!-- 
	<hr class="border-blue-500 w-50 h-50" />
    <hr class="border-blue-500 w-50" />
	 -->
</template>

<style>
.about {
  padding: 50px;
  text-align: center;
}

.comp {
  padding: 50px;
  background-color: #f5f5f5;
}
</style>
