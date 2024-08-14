<template>
  <div>
    <div className="relative overflow-hidden">
      <img
        src="../../../../public/background.png"
        alt="background"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="relative z-10 min-h-fit flex flex-col px-24">
        <Header />
      </div>
    </div>
    <ProductDetail />
    <Footer />
  </div>
</template>

<script setup>
import Header from "../../components/Layout/Header.vue";
import ProductDetail from "./components/ProductDetail.vue";
import Footer from "../../components/Layout/Footer.vue";
</script>
