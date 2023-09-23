<template>
    <div class="absolute w-screen h-screen left-0 top-0" :class='{ hidden: !show }'>
        <div class="absolute w-screen h-screen  left-0 top-0" :class="{ 'bg-black/50': show }">
            <transition name="fade">
                <div v-if='show'
                    class="opacity-100 absolute left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] max-w-lg w-full h-2/5 bg-gray-200 border rounded-lg shadow-lg px-16 ">
                    <slot />
                </div>
            </transition>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    show: Boolean
})


</script>

<style scoped>
.fade-enter-active {
    animation: transform 100ms;
}

.fade-leave-active {
    animation: transform 100ms;
}

@keyframes transform {
    0% {
        transform: scale(0.8) translate(-50%, -50%)
    }

    100% {
        transform: scale(1) translate(-50%, -50%)
    }
}
</style>
