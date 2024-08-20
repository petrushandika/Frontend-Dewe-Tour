<template>
  <div className="py-5 flex justify-between items-center">
    <img
      src="../../../public/logo.png"
      alt=""
      className="max-w-48"
    />
    <div className="flex flex-row gap-x-5">
      <router-link
        to="/login"
        className="text-orange-400"
      >
        <button
          className="w-24 h-10 bg-transparent border border-white text-white rounded"
        >
          Login
        </button></router-link
      >
      <router-link
        to="/register"
        className="text-orange-400"
      >
        <button className="w-24 h-10 bg-yellow-400 text-white rounded">
          Register
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup></script>
