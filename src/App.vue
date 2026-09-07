<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import HomeView from './views/HomeView.vue';
</script>

<template>
  <header>
      <Header />
  </header>

  <RouterView />
</template>

<style scoped>

</style>
