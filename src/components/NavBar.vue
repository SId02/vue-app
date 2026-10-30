
<style lang="postcss" scoped>
.nav-link {
  @apply px-3.5 py-2 text-sm font-semibold text-slate-600 rounded-xl transition-all hover:text-slate-900 hover:bg-slate-100;
}

.active-nav {
  @apply text-indigo-600 bg-indigo-50/80 hover:bg-indigo-50 hover:text-indigo-700;
}

.mobile-nav-link {
  @apply block px-4 py-2.5 text-sm font-semibold text-slate-600 rounded-xl transition-all hover:text-slate-900 hover:bg-slate-100;
}

.mobile-active-nav {
  @apply text-indigo-600 bg-indigo-50/80 hover:bg-indigo-50 hover:text-indigo-700;
}

/* Slide Transition for Mobile Menu */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
  <template>
  <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      
      <!-- Brand Logo / Title -->
      <router-link to="/" class="flex items-center space-x-3 group">
        <span class="text-base font-bold text-slate-900 tracking-tight">Vue App</span>
      </router-link>

      <!-- Desktop Navigation Links -->
      <div class="hidden lg:flex items-center space-x-1">
        <router-link to="/" class="nav-link" active-class="active-nav">Home</router-link>
        <router-link to="/about" class="nav-link" active-class="active-nav">About</router-link>
        <router-link to="/contact" class="nav-link" active-class="active-nav">Contact</router-link>
        <router-link to="/logindefault" class="nav-link" active-class="active-nav">Login Default</router-link>
        <router-link to="/loginwithapi" class="nav-link" active-class="active-nav">Login With Api</router-link>
      </div>

      <div class="lg:hidden">
        <button
          @click="toggleMenu"
          class="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>

    <transition name="slide">
      <div v-if="isMenuOpen" class="lg:hidden bg-white border-b border-slate-200/80 px-4 pt-2 pb-6 space-y-1 shadow-lg">
        <router-link to="/" @click="isMenuOpen = false" class="mobile-nav-link" active-class="mobile-active-nav">Home</router-link>
        <router-link to="/about" @click="isMenuOpen = false" class="mobile-nav-link" active-class="mobile-active-nav">About</router-link>
        <router-link to="/contact" @click="isMenuOpen = false" class="mobile-nav-link" active-class="mobile-active-nav">Contact</router-link>
        <router-link to="/logindefault" @click="isMenuOpen = false" class="mobile-nav-link" active-class="mobile-active-nav">Login Default</router-link>
        <router-link to="/loginwithapi" @click="isMenuOpen = false" class="mobile-nav-link" active-class="mobile-active-nav">Login With Api</router-link>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
