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
    <div
      className="max-w-[1200px] min-h-screen mx-auto flex flex-col gap-y-5 my-12"
    >
      <div className="flex flex-row justify-between">
        <h3 className="text-black text-xl font-semibold">Income Trip</h3>
        <button className="text-white bg-orange-400 px-3 rounded">
          Add Trip
        </button>
      </div>
      <GroupTour />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from "../../../components/Layout/Header.vue";
import GroupTour from "../../Home/components/GroupTour.vue";
import Footer from "../../../components/Layout/Footer.vue";
</script>
