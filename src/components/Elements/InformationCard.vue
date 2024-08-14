<template>
  <div className="flex flex-col gap-y-2">
    <p className="text-gray-400 text-sm font-medium">{{ title }}</p>
    <div className="flex">
      <img
        :src="src"
        :alt="alt"
        className="w-8 h-8 mr-4 object-cover"
      />
      <p className="text-black text-xl font-medium">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  src: String,
  alt: String,
  description: String,
});
</script>

<style scoped>
/* Add any additional styling here if needed */
</style>
