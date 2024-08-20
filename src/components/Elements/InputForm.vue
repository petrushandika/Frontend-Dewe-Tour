<template>
  <div>
    <label
      :for="id"
      class="text-black font-medium ml-2"
      >{{ label }}</label
    >
    <input
      :id="id"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="bg-white w-full p-2 border rounded-lg mb-4 outline-none"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  label: String,
  id: String,
  placeholder: String,
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);
</script>
