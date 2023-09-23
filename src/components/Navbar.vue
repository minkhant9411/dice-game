<template>
  <nav class="flex justify-between items-center mt-1">
    <!-- <span>Logo </span> -->
    <ul class="mx-auto flex justify-between  mt-3">
      <li>
        <router-link :to="'/'" class="nav-link"> Home </router-link>
      </li>
      <li>
        <router-link :to="'/'" class="nav-link"> About Us </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'playDice' }" class="nav-link">
          Let's Roll
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup></script>

<style></style>
