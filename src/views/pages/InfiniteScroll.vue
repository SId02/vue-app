
<style scoped>
.container {
  max-width: 800px;
}
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
    <section>
    <div class="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] bg-gray-100">
    <div class="container p-4 mx-auto">
      <h1 class="mb-4 text-2xl font-bold text-center">Infinite Scroll</h1>
      <div class="space-y-4">
        <div v-for="post in posts" :key="post.id" class="p-4 bg-white rounded-lg shadow-md">
          <h2 class="text-xl font-semibold">{{ post.title }}</h2>
          <p class="text-gray-700">{{ post.body }}</p>
        </div>
      </div>
      <p v-if="loading" class="mt-4 text-center">Loading...</p>
    </div>
    </div>
    </section>
    </div>
 
  </template>



<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const posts = ref([]);
    const loading = ref(false);
    const page = ref(1);
    const hasMore = ref(true);

    const fetchPosts = async () => {
      if (loading.value) return;
      loading.value = true;

      try {
        const response = await axios.get(`https://dummyjson.com/posts?limit=10&skip=${(page.value - 1) * 10}`);
        posts.value.push(...response.data.posts);
        hasMore.value = response.data.posts.length > 0;
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        loading.value = false;
      }
    };

    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight && hasMore.value) {
        page.value++;
      }
    };

    onMounted(() => {
      fetchPosts();
      window.addEventListener('scroll', handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      posts,
      loading,
      fetchPosts,
    };
  },
};
</script>