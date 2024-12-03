 
  <style scoped>
 
</style>
<template>
  <div>
    <!--  -->
    <router-link to="/" class="w-full p-2 mt-4 text-sm text-center text-white bg-gray-500 rounded hover:bg-gray-700">
            Back to Home
          </router-link>
        <!--  -->  
  </div>
    <div>
      <div v-if="isLoggedIn" class="text-center">
        <h1 class="text-2xl font-bold">Welcome, {{ username }}!</h1>
        <button @click="handleLogout" class="px-4 py-2 mt-4 bg-gray-300 rounded hover:bg-gray-400">
          Logout
        </button>
      </div>
      <form v-else @submit.prevent="handleLogin" class="flex flex-col space-y-2">
        <input
          type="text"
          placeholder="Username"
          v-model="username"
          class="px-4 py-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          v-model="password"
          class="px-4 py-2 border rounded"
        />
        <button type="submit" class="px-4 py-2 text-white bg-blue-500 rounded">
          Login
        </button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
        isLoggedIn: false,
      };
    },
    methods: {
      handleLogin() {
        axios.post('https://dummyjson.com/auth/login', {
          username: this.username,
          password: this.password,
        })
        .then(() => {
          this.isLoggedIn = true;
        })
        .catch((error) => {
          console.log(error);
        });
      },
      handleLogout() {
        this.isLoggedIn = false;
      },
    },
  };
  </script>
 
  