<template>
    <Modal :show='show'>

        <h1 class="text-center font-Press-Start mt-2 p-2 text-black text-lg drop-shadow-[3px_0_#7a7a7a]">
            Guess The Number
        </h1>
        <div class="grid gap-3 my-12 grid-cols-3">
            <img @click='chooseDice(num)' class="h-12 shadow-black w-12 shadow-md mx-auto cursor-pointer hover:scale-110"
                :src="`/images/dice${num}.png`" v-for=" num  in  numbers " :key="num" />
        </div>

    </Modal>
</template>

<script setup>
import Modal from './Modal.vue';
import { onUpdated, ref } from 'vue';
import { computed, onMounted } from 'vue';
import ModalVue from './Modal.vue';
const props = defineProps({
    show: Boolean
})
let show = ref(props.show);
let guessNum = ref('');
const emit = defineEmits(['show', 'guessnum']);
const chooseDice = (num) => {
    guessNum.value = num;
    show.value = false;
    emit('show');
    emit('guessnum', num);
}
onMounted(() => {
    show.value = true;
});
onUpdated(() => { show.value = props.show })
let numbers = ref([1, 2, 3, 4, 5, 6]);


</script>

<style></style>
