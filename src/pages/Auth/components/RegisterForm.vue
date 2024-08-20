<template>
  <div className="w-3/4 max-w-md">
    <h2 className="text-black text-2xl font-bold mb-4">Create an Account</h2>
    <input
      type="text"
      placeholder="Full Name"
      className="bg-white w-full p-3 border rounded-lg mb-4"
    />
    <input
      type="email"
      placeholder="Your Email"
      className="bg-white w-full p-3 border rounded-lg mb-4"
    />
    <input
      type="password"
      placeholder="Your Password"
      className="bg-white w-full p-3 border rounded-lg mb-4"
    />
    <button className="w-full py-3 bg-orange-400 text-white rounded-lg">
      Sign Up
    </button>
    <p className="text-center mt-4 text-sm">
      Already have an account?
      <router-link
        to="/login"
        className="text-orange-400"
        >Log in</router-link
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",
};
</script>

<style scoped>
/* Add any additional styling here */
</style>
