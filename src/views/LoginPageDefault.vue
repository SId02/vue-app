
<template>
  <div class="flex items-center max-w-sm p-6 mx-auto space-x-4 bg-white shadow-md rounded-xl">
    <div v-if="!isLoggedIn">
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="username" class="block mb-2 font-bold text-gray-700">Username:</label>
          <input
            id="username"
            v-model="username"
            type="text"
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mb-6">
          <label for="password" class="block mb-2 font-bold text-gray-700">Password:</label>
          <input
            id="password"
            v-model="password"
            type="password"
            class="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          Login
        </button>
      </form>
    </div>
    <div v-else>
      <h1 class="text-2xl font-bold">Welcome {{ username }}</h1>
      <button @click="handleLogout" class="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline">
        Logout
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const isLoggedIn = ref(false);

    const handleSubmit = () => {
      if (username.value === 'admin' && password.value === 'password') {
        isLoggedIn.value = true;
      } else {
        alert('Invalid credentials');
      }
    };

    const handleLogout = () => {
      isLoggedIn.value = false;
    };

    return {
      username,
      password,
      isLoggedIn,
      handleSubmit,
      handleLogout,
    };
  },
};
</script>