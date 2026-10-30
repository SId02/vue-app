
<style scoped>
/* Optional scoped styles if needed */
</style>
<template>
  <div class="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <!-- Back to Home Button (Top Left Container) -->
    <div class="absolute top-6 left-6">
      <router-link
        to="/"
        class="inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg shadow-sm hover:bg-slate-50 transition-colors"
      >
        ← Back to Home
      </router-link>
    </div>

    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="text-center text-3xl font-extrabold tracking-tight text-slate-900">
        {{ isLoggedIn ? 'Dashboard' : 'Sign in to your account' }}
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow-sm border border-slate-200/80 sm:rounded-xl sm:px-10">
        
        <!-- Welcome Screen (Logged In) -->
        <div v-if="isLoggedIn" class="text-center space-y-4">
          <div class="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
            ✓
          </div>
          <h3 class="text-xl font-semibold text-slate-900">Welcome back, {{ username }}!</h3>
          <p class="text-sm text-slate-500">You have successfully logged into your account.</p>
          <button 
            @click="handleLogout" 
            class="w-full flex justify-center py-2.5 px-4 border border-slate-300 rounded-lg shadow-sm text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 transition-colors"
          >
            Logout
          </button>
        </div>

        <!-- Login Form (Logged Out) -->
        <form v-else @submit.prevent="handleLogin" class="space-y-5">
          <!-- Error Alert -->
          <div v-if="errorMessage" class="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg">
            {{ errorMessage }}
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Username</label>
            <input
              type="text"
              v-model="username"
              required
              placeholder="Enter your username"
              class="w-full px-3 py-2 border border-slate-300 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input
              type="password"
              v-model="password"
              required
              placeholder="••••••••"
              class="w-full px-3 py-2 border border-slate-300 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            />
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors disabled:opacity-50"
          >
            <span v-if="loading">Signing in...</span>
            <span v-else>Sign in</span>
          </button>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      isLoggedIn: false,
      loading: false,
      errorMessage: '',
    };
  },
  methods: {
    async handleLogin() {
      this.loading = true;
      this.errorMessage = '';

      try {
        const response = await fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: this.username,
            password: this.password,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Invalid username or password');
        }

        // Successfully logged in (DummyJSON returns token and user details)
        this.isLoggedIn = true;
        // Optionally store token: localStorage.setItem('token', data.token);
        
      } catch (error) {
        console.error('Login error:', error);
        this.errorMessage = error.message || 'An error occurred during login.';
      } finally {
        this.loading = false;
      }
    },
    handleLogout() {
      this.isLoggedIn = false;
      this.password = '';
      // localStorage.removeItem('token');
    },
  },
};
</script>
