<style>
</style>
<template>
    <div class="container px-4 py-6 mx-auto">
    <div class="flex justify-start mb-6">
      <router-link
        to="/"
        class="inline-block px-4 py-2 text-sm text-white transition-colors bg-gray-500 rounded hover:bg-gray-700">
        Back to Home
      </router-link>
    </div>

    <!-- <section>
      <div class="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] bg-gray-100">
        <h3>Form Validation</h3>
      </div>
      </section> -->
      <!--  -->
      <div class="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] bg-gray-100">
      <div class="container px-4 mx-auto">
    <h3 class="my-5 text-2xl font-bold text-center">Form Validation</h3>
    
    <div class="flex justify-center">
      <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <!-- Username Field -->
        <div class="mb-4">
          <label class="block mb-2 text-sm font-bold text-gray-700" for="username">
            Username
          </label>
          <input 
            id="username"
            v-model="username"
            type="text" 
            class="w-full px-3 py-2 border rounded-lg"
            :class="{ 'border-red-500': errorUserName }"
            placeholder="Username"
          />
          <p v-if="errorUserName" class="mt-1 text-xs text-red-500">
            {{ errorUserName }}
          </p>
        </div>

        <!-- Email Field -->
        <div class="mb-4">
          <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
            Email
          </label>
          <input 
            id="email"
            v-model="email"
            type="email" 
            class="w-full px-3 py-2 border rounded-lg"
            :class="{ 'border-red-500': errorEmail }"
            placeholder="Email"
          />
          <p v-if="errorEmail" class="mt-1 text-xs text-red-500">
            {{ errorEmail }}
          </p>
        </div>

        <!-- Password Field -->
        <div class="mb-4">
          <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
            Password
          </label>
          <input 
            id="password"
            v-model="password"
            type="password" 
            class="w-full px-3 py-2 border rounded-lg"
            :class="{ 'border-red-500': errorPassword }"
            placeholder="Password"
          />
          <p v-if="errorPassword" class="mt-1 text-xs text-red-500">
            {{ errorPassword }}
          </p>
        </div>

        <!-- Confirm Password Field -->
        <div class="mb-4">
          <label class="block mb-2 text-sm font-bold text-gray-700" for="confirmPassword">
            Confirm Password
          </label>
          <input 
            id="confirmPassword"
            v-model="confirmPassword"
            type="password" 
            class="w-full px-3 py-2 border rounded-lg"
            :class="{ 'border-red-500': errorConfirmPassword }"
            placeholder="Confirm Password"
          />
          <p v-if="errorConfirmPassword" class="mt-1 text-xs text-red-500">
            {{ errorConfirmPassword }}
          </p>
        </div>

        <!-- Submit Button -->
        <div class="mb-4">
          <button 
            @click="validate"
            class="w-full py-2 text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
  </div>

    </div>

</template>
<script setup>
import { ref } from 'vue'


const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const errorUserName = ref('')
const errorEmail = ref('')
const errorPassword = ref('')
const errorConfirmPassword = ref('')


const validate = (e) => {
  e.preventDefault()

  errorUserName.value = username.value.length > 3 ? '' : 'Username must be 3 or more Characters.'
  errorEmail.value = email.value.includes('@') ? '' : 'Email should have @'
  errorPassword.value = password.value.length > 8 ? '' : 'Password should be 8 or more Characters.'
  errorConfirmPassword.value = (password.value !== '' && password.value === confirmPassword.value) 
    ? '' 
    : 'Passwords didn\'t match.'
}
</script>