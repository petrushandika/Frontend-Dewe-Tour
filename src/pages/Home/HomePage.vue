<template>
  <div className="relative overflow-hidden">
    <img
      src="../../../../public/background.png"
      alt="background"
      className="absolute inset-0 object-cover w-full"
    />
    <div class="relative z-10 min-h-screen flex flex-col px-24">
      <Header />
      <Hero />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from "../../components/Layout/Header.vue";
import Hero from "./components/Hero.vue";
import Footer from "../../components/Layout/Footer.vue";
</script>
