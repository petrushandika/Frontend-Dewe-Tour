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
          travel platform offering comprehensive and affordable tour packages
          for domestic and international destinations. Plan your trip easily and
          enjoy the best deals with Dewetour
        </p>
      </div>
    </div>

    <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
      <div className="w-3/4 max-w-md">
        <h2 className="text-black text-2xl font-bold mb-4">Welcome Back!</h2>
        <button
          className="w-full py-3 px-4 border rounded-lg mb-4 flex items-center justify-center bg-white"
        >
          <img
            src="../../../public/google.png"
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
          <a
            href="#"
            className="text-orange-400"
            >Sign up</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
};
</script>

<style scoped>
/* Add any additional styling here */
</style>
