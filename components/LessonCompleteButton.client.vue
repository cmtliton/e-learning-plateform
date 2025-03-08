<template>
  <v-checkbox-btn
    @input="() => $emit('update:modelValue', !modelValue)"
    :label="modelValue? 'Completed!' : 'Mark as Complete' "
    :class="{'text-indigo': modelValue == true}"
    :model-value="modelValue"
  ></v-checkbox-btn>
</template>
<script setup>
  defineProps({
      modelValue: {
          type: Boolean,
          default: false,
      },
  });
  defineEmits(['update:modelValue']);
</script>