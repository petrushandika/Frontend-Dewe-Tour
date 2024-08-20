<template>
  <div className="w-full flex flex-col justify-center items-center">
    <h1
      v-if="title"
      className="text-black text-3xl font-medium pb-20"
    >
      {{ title }}
    </h1>

    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 pb-20"
    >
      <a href="">
        <TourCard
          src="../../../../public/funtassie.png"
          alt="funtassie"
          destination="6D/4N Fun Tassie Vacation"
          price="IDR. 12,398,009"
          country="Australia"
        />
      </a>
      <a href="">
        <TourCard
          src="../../../../public/excitingsummer.png"
          alt="excitingsummer"
          destination="6D/4N Exciting Summer in ..."
          price="IDR. 10,288,009"
          country="South Korea"
        />
      </a>
      <a href="">
        <TourCard
          src="../../../../public/worderfulautumn.png"
          alt="wonderfulautumn"
          destination="8D/6N Wonderful Autum ..."
          price="IDR. 28,999,009"
          country="Japan"
        />
      </a>
      <a href="">
        <TourCard
          src="../../../../public/overlandjakarta.png"
          alt="overlandjakarta"
          destination="4D/3N Overland Jakarta B..."
          price="IDR. 12,398,009"
          country="Indonesia"
        />
      </a>
      <a href="">
        <TourCard
          src="../../../../public/labuanbajo.png"
          alt="labuanbajo"
          destination="4D/3N Labuan Bajo Delight ..."
          price="IDR. 10,488,009"
          country="Indonesia"
        />
      </a>
      <a href="">
        <TourCard
          src="../../../../public/magictokyo.png"
          alt="magictokyo"
          destination="5D/4N Magic Tokyo Fun ..."
          price="IDR. 11,188,009"
          country="Japan"
        />
      </a>
    </div>
  </div>
</template>

<script setup>
import TourCard from "../../../components/Elements/TourCard.vue";
import { defineProps } from "vue";

const props = defineProps({
  title: String,
});
</script>
