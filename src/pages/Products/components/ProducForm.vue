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
      className="max-w-[1200px] min-h-screen mx-auto flex flex-col gap-y-1 my-12"
    >
      <h3 className="text-black text-xl font-semibold mb-5">Add Trip</h3>
      <InputForm
        label="Title Trip"
        id="title"
        placeholder="Input Trip"
        v-model="trip.title"
      />
      <InputForm
        label="Country"
        id="country"
        placeholder="Input Country"
        v-model="trip.country"
      />
      <InputForm
        label="Accommodation"
        id="accommodation"
        placeholder="Input Accommodation"
        v-model="trip.accommodation"
      />
      <InputForm
        label="Transportation"
        id="transportation"
        placeholder="Input Transportation"
        v-model="trip.transportation"
      />
      <InputForm
        label="Eat"
        id="eat"
        placeholder="Input Eat"
        v-model="trip.eat"
      />

      <div>
        <label for="description">Description</label>
        <textarea
          id="description"
          placeholder="Input Description Trip"
          v-model="trip.description"
          className="bg-white w-full p-2 border rounded-lg mb-4 outline-none"
        ></textarea>
      </div>

      <input type="file" />

      <div className="flex justify-end">
        <button
          className="text-white bg-orange-400 py-1 px-5 rounded"
          @click="addTrip"
        >
          Add Trip
        </button>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import Header from "../../../components/Layout/Header.vue";
import Footer from "../../../components/Layout/Footer.vue";
import InputForm from "../../../components/Elements/InputForm.vue";
import { ref } from "vue";

const trip = ref({
  title: "",
  country: "",
  accommodation: "",
  transportation: "",
  eat: "",
  description: "",
  // add other fields as necessary
});

const addTrip = () => {
  console.log("Trip data:", trip.value);
  // Add logic to handle form submission
};
</script>
