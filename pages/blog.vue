<template>
    <v-layout>
    <CourseCard/>
    </v-layout>
</template>
<script setup>
import { LessonCompleteButton } from '#components';
import {ref } from 'vue'
const isComplete = ref(false)

const toggleComplete = ()=> {
    return isComplete.value = ! isComplete.value
}

</script>

<style scoped>
</style>