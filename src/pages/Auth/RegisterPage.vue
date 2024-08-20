<template>
  <div className="flex h-screen">
    <div
      className="hidden md:flex w-1/2 bg-blue-50 items-center justify-center relative"
    >
      <img
        src="../../../public/flight.jpg"
        alt="Illustration"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 p-4 z-10 text-white">
        <h1 className="text-4xl font-semibold">Dewetour</h1>
        <p>
          Travel platform offering comprehensive and affordable tour packages
          for domestic and international destinations. Plan your trip easily and
          enjoy the best deals with Dewetour.
        </p>
      </div>
    </div>

    <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
      <RegisterForm />
    </div>
  </div>
</template>

<script>
import RegisterForm from "./components/RegisterForm.vue";

export default {
  name: "RegisterPage",
  components: {
    RegisterForm,
  },
};
</script>

<style scoped>
/* Add any additional styling here */
</style>
