<style scoped></style>
<template>
    <div class="container p-4 mx-auto">
      <h1 class="mb-4 text-2xl font-bold text-center">Random Users</h1>
      <div v-if="error" class="notification is-danger">{{ error }}</div>
      <div v-if="loading && initialLoad" class="notification is-info">Loading initial users...</div>
      <div v-if="loading && !initialLoad" class="notification is-info">Loading more users...</div>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="(user, index) in users" :key="index" class="p-4 border rounded shadow">
          <img
            :src="user.picture.large"
            :alt="`${user.name.first} ${user.name.last}`"
            class="float-left mr-4 rounded"
            style="width: 100px; height: 100px; object-fit: cover;"
          />
          <h2 class="text-lg font-semibold">{{ user.name.first }} {{ user.name.last }}</h2>
          <p class="text-gray-600">{{ user.email }}</p>
          <p class="text-gray-600">{{ user.location.country }}</p>
        </div>
      </div>
      <div class="mt-4 text-center">
        <button
          :disabled="loading"
          @click="handleLoadMore"
          class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          :class="{ 'opacity-50 cursor-not-allowed': loading }"
        >
          Load More
        </button>
      </div>
    </div>
    <footer class="flex justify-center mt-4">
      <router-link to="/" class="text-blue-500 hover:underline">
        Back to Home
      </router-link>
    </footer>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  
  const USERS_TO_SHOW = 10;
  const users = ref([]);
  const page = ref(1);
  const loading = ref(false);
  const error = ref(null);
  const initialLoad = ref(true);
  
  const fetchUsers = async (pageNumber) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await fetch(`https://randomuser.me/api/?page=${pageNumber}&results=${USERS_TO_SHOW}`);
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      return data.results;
    } catch (err) {
      error.value = err.message || 'An unknown error occurred';
      return [];
    } finally {
      loading.value = false;
    }
  };
  
  onMounted(async () => {
    const initialUsers = await fetchUsers(1);
    users.value = initialUsers;
    page.value = 2;
    initialLoad.value = false;
  });
  
  const handleLoadMore = async () => {
    if (!loading.value) {
      const newUsers = await fetchUsers(page.value);
      users.value = [...users.value, ...newUsers];
      page.value++;
    }
  };
  </script>
  
