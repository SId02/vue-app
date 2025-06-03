<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
</script>

<template>
  <header>
 <div class="wrapper">
        <NavBar />
        <RouterView />
        <FooterBar />
      </div>
  </header>
</template>

<style scoped>

</style>
