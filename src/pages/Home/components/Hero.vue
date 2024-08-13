<template>
  <div className="flex flex-col justify-center items-start h-full">
    <div className="py-20">
      <h1 className="text-5xl font-semibold text-white">Explore</h1>
      <h1 className="text-5xl font-light text-white">
        your amazing city together
      </h1>
    </div>
    <div>
      <p className="text-white pb-2">Find greet places to holiday</p>
      <div className="w-full flex">
        <input
          type="text"
          placeholder="Search Here"
          className="w-full h-10 px-2 rounded rounded-r-none bg-white outline-none"
        />
        <button
          className="h-10 px-5 rounded rounded-l-none text-white bg-yellow-400"
        >
          Search
        </button>
      </div>
    </div>
    <div className="w-full py-20 flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16">
        <ChoiceCard
          src="../../../../public/guarantee.png"
          alt="guarantee"
          title="Best Price Guarantee"
          description="A small river named Duren flows by their place and supplies"
        />
        <ChoiceCard
          src="../../../../public/heart.png"
          alt="heart"
          title="Travellers Love Us"
          description="A small river named Duren flows by their place and supplies"
        />
        <ChoiceCard
          src="../../../../public/agent.png"
          alt="agent"
          title="Best Travel Agent"
          description="A small river named Duren flows by their place and supplies"
        />
        <ChoiceCard
          src="../../../../public/support.png"
          alt="support"
          title="Our Dedicated Support"
          description="A small river named Duren flows by their place and supplies"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ChoiceCard from "../../../components/Elements/ChoiceCard.vue";
</script>
