<template>
  <div class="h-screen overflow-x-hidden bg-gray-200">
    <Navbar />
    <RouterView />
  </div>
</template>
<script setup>
import Navbar from './components/Navbar.vue';
</script>
