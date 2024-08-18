<template>
  <div
    className="max-w-[1200px] min-h-screen mx-auto flex flex-col gap-y-5 my-12"
  >
    <div className="mb-5 text-start flex flex-col">
      <h1 className="text-black text-3xl font-bold">
        6D/4N Fun Tassie Vacation + Sydney
      </h1>
      <p className="text-lg text-gray-500 font-medium">Australia</p>
    </div>
    <div className="flex flex-col gap-y-5">
      <img
        src="../../../../public/funtassie.png"
        alt="Fun Tassie Vacation"
        className="w-full h-[550px] object-cover rounded-lg"
      />

      <div className="grid grid-cols-3 gap-4">
        <img
          src="../../../../public/funtassie2.png"
          alt="Fun Tassie 2"
          className="w-full h-full object-cover rounded-lg"
        />
        <img
          src="../../../../public/funtassie3.png"
          alt="Fun Tassie 3"
          className="w-full h-full object-cover rounded-lg"
        />
        <img
          src="../../../../public/funtassie4.png"
          alt="Fun Tassie 4"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
    <div className="flex flex-col gap-y-5">
      <p className="text-black font-bold">Information Trip</p>
      <div className="w-full flex flex-row justify-between">
        <InformationCard
          title="Accommodation"
          src="../../../../public/hotel.png"
          alt="Hotel"
          description="Hotel 4 Nights"
        />
        <InformationCard
          title="Transportation"
          src="../../../../public/plane.png"
          alt="Plane"
          description="Qatar Airways"
        />
        <InformationCard
          title="Eat"
          src="../../../../public/meal.png"
          alt="Meal"
          description="Included as Itenarary"
        />
        <InformationCard
          title="Duration"
          src="../../../../public/time.png"
          alt="Time"
          description="6 Day 4 Night"
        />
        <InformationCard
          title="Date Trip"
          src="../../../../public/calendar.png"
          alt="Calendar"
          description="26 August 2020"
        />
      </div>
    </div>
    <div className="flex flex-col">
      <p className="text-black font-bold">Description</p>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, vitae
        harum explicabo repellat esse tenetur ut vel recusandae necessitatibus
        neque sunt eaque perspiciatis ex sint est excepturi sapiente earum
        sequi. Porro dolore illo fugiat suscipit doloribus? Pariatur quas
        eligendi fugit ab quo at provident maxime placeat necessitatibus
        expedita facilis, nostrum inventore qui facere enim atque deserunt
        dignissimos. Nulla, odit omnis. Veniam blanditiis ipsa harum dignissimos
        quo ipsam at quisquam ullam error architecto sapiente cupiditate, sit
        minus voluptatibus odit reiciendis cumque ut facere? Voluptate a
        molestiae quisquam ipsum ut, possimus placeat.
      </p>
    </div>
    <div className="text-lg flex flex-row justify-between">
      <div className="flex flex-row">
        <p className="text-yellow-400 font-medium">IDR. 12,398,000</p>
        <p className="ml-2 text-black font-medium">/ Person</p>
      </div>
      <div className="flex flex-row gap-x-3 items-center">
        <button>
          <i
            class="pi pi-minus"
            style="
              font-size: 0.8rem;
              color: white;
              padding: 5px;
              border-radius: 5px;
              background-color: orange;
            "
          />
        </button>
        <span className="text-base">1</span>
        <button>
          <i
            class="pi pi-plus"
            style="
              font-size: 0.8rem;
              color: white;
              padding: 5px;
              border-radius: 5px;
              background-color: orange;
            "
          />
        </button>
      </div>
    </div>
    <div className="text-lg flex flex-row justify-between">
      <p className="text-black font-semibold">Total :</p>
      <p className="text-yellow-400 font-medium">IDR. 12,398,000</p>
    </div>
    <div className="flex justify-end">
      <button className="w-36 h-10 bg-orange-400 text-white rounded">
        BOOK NOW
      </button>
    </div>
  </div>
</template>

<script setup>
import InformationCard from "../../../components/Elements/InformationCard.vue";
import "primeicons/primeicons.css";
</script>
