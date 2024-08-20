<template>
  <div className="w-3/4 max-w-md">
    <h2 className="text-black text-2xl font-bold mb-4">Welcome Back!</h2>
    <button
      className="w-full py-3 px-4 border rounded-lg mb-4 flex items-center justify-center bg-white"
    >
      <img
        src="../../../../public/google.png"
        alt="Google Logo"
        className="h-6 w-6 mr-2"
      />
      Log in with Google
    </button>
    <p className="text-sm text-center mb-4">OR LOGIN WITH EMAIL</p>
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
    <div className="flex justify-between items-center mb-4">
      <label className="flex items-center">
        <input
          type="checkbox"
          className="form-checkbox"
        />
        <span className="ml-2 text-sm">Keep me logged in</span>
      </label>
      <a
        href="#"
        className="text-sm text-orange-400"
        >Forgot password?</a
      >
    </div>
    <button className="w-full py-3 bg-orange-400 text-white rounded-lg">
      Log in
    </button>
    <p className="text-center mt-4 text-sm">
      Don't have an account yet?
      <router-link
        to="/register"
        className="text-orange-400"
        >Sign Up</router-link
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
};
</script>

<style scoped>
/* Add any additional styling here */
</style>
