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
      <div className="flex flex-row justify-start">
        <h3 className="text-black text-xl font-semibold">Add Trip</h3>
      </div>
      <div>
        <div>
          <label
            for="title"
            className="text-black font-medium ml-2"
            >Title Trip</label
          >
          <input
            type="text"
            placeholder="Input Trip"
            className="bg-white w-full p-2 border rounded-lg mb-4 outline-none"
          />
        </div>
        <div>
          <label
            for="country"
            className="text-black font-medium ml-2"
            >Country</label
          >
          <input
            type="text"
            placeholder="Input Country"
            className="bg-white w-full p-2 border rounded-lg mb-4 outline-none"
          />
        </div>
        <div>
          <label
            for="accomodation"
            className="text-black font-medium ml-2"
            >Accomodation</label
          >
          <input
            type="text"
            placeholder="Input Accomodation"
            className="bg-white w-full p-2 border rounded-lg mb-4 outline-none"
          />
        </div>
        <div>
          <label
            for="transportation"
            className="text-black font-medium ml-2"
            >Transportation</label
          >
          <input
            type="text"
            placeholder="Input Transportation"
            className="bg-white w-full p-2 border rounded-lg mb-4 outline-none"
          />
        </div>
        <div>
          <label
            for="eat"
            className="text-black font-medium ml-2"
            >Eat</label
          >
          <input
            type="text"
            placeholder="Input Eat"
            className="bg-white w-full p-2 border rounded-lg mb-4 outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label
            for="duration"
            className="text-black font-medium ml-2"
            >Duration</label
          >
          <div className="flex flex-row gap-x-3">
            <div className="w-full flex flex-row">
              <input
                type="text"
                placeholder="Input Day"
                className="bg-white w-full p-2 border rounded-lg mb-4 outline-none"
              />
              <label
                for="day"
                className="text-black font-medium ml-2"
                >Day</label
              >
            </div>
            <div className="w-full flex flex-row">
              <input
                type="text"
                placeholder="Input Night"
                className="bg-white w-full p-2 border rounded-lg mb-4 outline-none"
              />
              <label
                for="night"
                className="text-black font-medium ml-2"
                >Night</label
              >
            </div>
          </div>
          <div>
            <label
              for="date"
              className="text-black font-medium ml-2"
              >Date Trip</label
            >
            <input
              type="date"
              placeholder="Input Date Trip"
              className="bg-white w-full p-2 border rounded-lg mb-4 outline-none"
            />
          </div>
          <div>
            <label
              for="price"
              className="text-black font-medium ml-2"
              >Price</label
            >
            <input
              type="price"
              placeholder="Input Price Trip"
              className="bg-white w-full p-2 border rounded-lg mb-4 outline-none"
            />
          </div>
          <div>
            <label
              for="quota"
              className="text-black font-medium ml-2"
              >Quota</label
            >
            <input
              type="quota"
              placeholder="Input Quota Trip"
              className="bg-white w-full p-2 border rounded-lg mb-4 outline-none"
            />
          </div>
          <div>
            <label
              for="description"
              className="text-black font-medium ml-2"
              >Description</label
            >
            <textarea
              name="description"
              id="description"
              placeholder="Input Description Trip"
              className="bg-white w-full p-2 border rounded-lg mb-4 outline-none"
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label
              for="image"
              className="text-black font-medium ml-2"
              >Image</label
            >
            <input type="file" />
          </div>
          <div className="flex justify-end">
            <button className="text-white bg-orange-400 py-1 px-5 rounded">
              Add Trip
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from "../../../components/Layout/Header.vue";
import Footer from "../../../components/Layout/Footer.vue";
</script>
