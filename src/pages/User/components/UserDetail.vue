<template>
  <div
    className="max-w-[1200px] mx-auto flex flex-row justify-between gap-y-5 my-12 bg-white rounded p-10"
  >
    <div className="flex flex-col gap-y-10">
      <h1 className="text-black text-3xl font-bold">Personal Info</h1>
      <div className="flex flex-col gap-y-5">
        <div className="flex items-center gap-x-5">
          <i className="pi pi-user bg-gray-100 p-2 rounded-full text-2xl"></i>
          <div>
            <p className="text-black font-medium">Full Name</p>
            <p>Petrus Handika</p>
          </div>
        </div>
        <div className="flex items-center gap-x-5">
          <i
            className="pi pi-envelope bg-gray-100 p-2 rounded-full text-2xl"
          ></i>
          <div>
            <p className="text-black font-medium">Email</p>
            <p>petrushandikasinaga@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center gap-x-5">
          <i className="pi pi-phone bg-gray-100 p-2 rounded-full text-2xl"></i>
          <div>
            <p className="text-black font-medium">Mobile Phone</p>
            <p>081573018140</p>
          </div>
        </div>
        <div className="flex items-center gap-x-5">
          <i
            className="pi pi-map-marker bg-gray-100 p-2 rounded-full text-2xl"
          ></i>
          <div>
            <p className="text-black font-medium">Address</p>
            <p>Perumahan Permata Bintaro Residence C-3</p>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-y-5">
      <img
        src="../../../../public/person.jpeg"
        alt="person"
        className="w-72 rounded"
      />
      <button className="text-xl w-full text-white bg-orange-400 rounded p-2">
        Change Photo Profile
      </button>
      <!-- <input type="file" /> -->
    </div>
  </div>
</template>

<script setup>
import "primeicons/primeicons.css";
</script>
