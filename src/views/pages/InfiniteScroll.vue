<template>
  <div class="min-h-screen bg-slate-50 text-slate-800 pb-16">
    <!-- Navigation Header -->
    <div class="max-w-2xl mx-auto px-4 pt-6">
      <router-link
        to="/"
        class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-slate-700 rounded-lg shadow-sm hover:bg-slate-800 transition-colors"
      >
        ← Back to Home
      </router-link>
    </div>

    <!-- Main Content Area -->
    <main class="max-w-2xl mx-auto px-4 py-6">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-extrabold tracking-tight text-slate-900">Infinite Scroll</h1>
        <p class="text-sm text-slate-500 mt-1">Scroll down to dynamically load more posts</p>
      </div>

      <!-- Posts List -->
      <div class="space-y-4">
        <article
          v-for="post in posts"
          :key="post.id"
          class="p-6 bg-white rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
        >
          <h2 class="text-lg font-semibold text-slate-900 mb-2">{{ post.title }}</h2>
          <p class="text-slate-600 leading-relaxed text-sm">{{ post.body }}</p>
        </article>
      </div>

      <!-- Sleek Loading Indicator -->
      <div v-if="loading" class="flex justify-center items-center py-8">
        <div class="w-6 h-6 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
        <span class="ml-2 text-sm font-medium text-slate-500">Loading more posts...</span>
      </div>

      <!-- End of List Message -->
      <div v-if="!hasMore && posts.length > 0" class="text-center py-8 text-sm font-medium text-slate-400">
        You've reached the end of the list! 🎉
      </div>
    </main>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';

export default {
  setup() {
    const posts = ref([]);
    const loading = ref(false);
    const page = ref(1);
    const hasMore = ref(true);
    const limit = 10;

    const fetchPosts = async () => {
      if (loading.value || !hasMore.value) return;
      loading.value = true;

      try {
        const skip = (page.value - 1) * limit;
        const response = await fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`);
        const data = await response.json();

        if (data.posts && data.posts.length > 0) {
          posts.value.push(...data.posts);
          
          // Stop fetching if we received fewer posts than the limit or hit total count
          if (data.posts.length < limit || posts.value.length >= data.total) {
            hasMore.value = false;
          }
        } else {
          hasMore.value = false;
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        loading.value = false;
      }
    };

    const handleScroll = () => {
      // Trigger fetch when user is within 250px of the bottom of the page
      const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 250;
      
      if (nearBottom && !loading.value && hasMore.value) {
        page.value++;
      }
    };

    // Automatically trigger fetchPosts whenever the page number increments
    watch(page, () => {
      fetchPosts();
    });

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
      hasMore,
    };
  },
};
</script>