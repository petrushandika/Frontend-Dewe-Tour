<template>
  <div
    className="w-full max-w-56 p-10 bg-white flex flex-col text-center items-center justify-center gap-y-5 rounded"
  >
    <img
      :src="src"
      :alt="alt"
      className="w-16"
    />
    <h3 class="text-black text-xl font-medium">{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>
