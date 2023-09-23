<template>
  <div class="flex justify-between mx-auto max-w-6xl items-center overflow-x-hidden h-[calc(100%-100px)]">
    <!-- <Score /> -->
    <Dice @show='showModal' :guess='guess' />
    <!-- <Score /> -->
    <GuessNumber class="" @show='show = false' @guessnum='GuessNum' :show='show' />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Dice from '../components/Dice.vue';
import GuessNumber from '../components/GuessNumber.vue';
import Score from '../components/Score.vue';
let show = ref();
let guess = ref();
let GuessNum = (num) => {
  guess.value = num;
};
let showModal = () => {
  show.value = true;
};

</script>

<style></style>
