<script setup>
import { RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
<NavBar/>

    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
