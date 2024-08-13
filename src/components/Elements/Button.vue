<template>
  <button
    :className="btnClass"
    :style="buttonStyle"
  >
    {{ label }}
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: "ghost",
  },
});

const btnClass = computed(() => {
  return `btn-${props.type}`;
});
</script>

<style scoped></style>
