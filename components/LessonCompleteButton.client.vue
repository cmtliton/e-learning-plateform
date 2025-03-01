<template>
    <v-checkbox-btn
      @input="() => $emit('update:modelValue', !modelValue)"
      :label="modelValue? 'Completed!' : 'Mark as Complete' "
      color="green"
      :class="{'text-success': modelValue == true}"
      :model-value="modelValue"
    ></v-checkbox-btn>
  </template>
  <script setup lang="ts">
    defineProps({
        modelValue: {
            type: Boolean,
            default: false,
        },
    });
    defineEmits(['update:modelValue']);
  </script>