<template>
  <div className="bg-white p-2 rounded">
    <img
      :src="src"
      :alt="alt"
      className="w-72"
    />
    <div>
      <h3 className="my-3 text-black text-xl font-normal">
        {{ destination }}
      </h3>
      <div className="mb-2 flex flex-row justify-between items-center">
        <p className="text-yellow-400 font-medium">{{ price }}</p>
        <p className="text-sm">{{ country }}</p>
      </div>
    </div>
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
  destination: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});
</script>
