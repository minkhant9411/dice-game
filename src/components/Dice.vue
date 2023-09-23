<template>
  <div class="font-Press-Start mx-auto flex flex-col justify-center items-center">
    <h1 @click='show'
      class="font-Press-Start max-md:text-2xl text-4xl mb-2 inline-block cursor-pointer hover:text-white hover:drop-shadow-[5px_0_#000]"
      :class="wordAnim ? 'text-black drop-shadow-[5px_0_#7a7a7a]' : ' text-white drop-shadow-[5px_0_#000]'">
      {{ props.guess ? "Let's Roll!" : 'Click Here To Guess!' }}
    </h1>
    <h1 v-if="guess" class="max-md:text-base text-2xl mt-8 drop-shadow-[5px_0_#7a7a7a]">
      You Guess!
    </h1>

    <img :src="props.guess ? `/images/dice${props
      .guess}.png` : '/images/rolling.gif'" class="h-[10rem] w-[10rem] mx-auto m-8" />
    <button @click="rollDice" v-if='props.guess'
      class="border border-black bg-white drop-shadow-[5px_0_#000] py-5 rounded hover:[text-shadow:4px_0_#7a7a7a] hover:drop-shadow-[5px_0_#7a7a7a] hover:text-white hover:bg-black transition-all duration-100 ease-linear px-2"
      disabled>
      Roll the Dice
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
let wordAnim = ref(true);
let rollDice = () => { };
let anim = setInterval(() => {
  wordAnim.value = !wordAnim.value;
  if (props.guess) {
    clearInterval(anim);
    wordAnim.value = true
  }
}, 1000)


const props = defineProps({
  show: Boolean,
  guess: Number
})
// let show = ref(props.show);
const emit = defineEmits(['show']);
const show = () => {
  emit('show');
}
</script>

<style></style>
