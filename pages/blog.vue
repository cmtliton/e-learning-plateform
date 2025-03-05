<template>
    <v-layout>
    <div class="mx-auto py-16">
        <h1 class="text-center text-white">defineProps and defineEmits</h1>
        <LessonCompleteButton :modelValue="isComplete" @update:model-value="toggleComplete"/>
    </div>
    </v-layout>
</template>
<script setup lang="ts">
import { LessonCompleteButton } from '#components';
import {ref } from 'vue'
const isComplete = ref(false)

const toggleComplete = ()=> {
    return isComplete.value = ! isComplete.value
}

</script>

<style scoped>
</style>