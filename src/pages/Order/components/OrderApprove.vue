<template>
  <div
    className="max-w-[1200px] mx-auto flex flex-col gap-y-5 my-12 bg-white rounded"
  >
    <div className="p-10">
      <div className="flex justify-between">
        <img
          src="../../../../public/logo2.png"
          alt=""
          className="w-40"
        />
        <div className="text-end">
          <h1 className="text-black text-2xl font-medium">Booking</h1>
          <p>
            <span className="text-gray-400 font-medium">Saturday</span>, 22 July
            2024
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <div className="grid grid-cols-3 gap-x-20 mb-20">
          <div>
            <h3 className="text-black text-xl font-bold mb-1">
              6D/4N Fun Tassie Vacation
            </h3>
            <p className="text-base">Australia</p>
          </div>

          <div>
            <p className="text-black text-lg font-semibold mb-1">Date Trip</p>
            <p className="text-base">26 August 2024</p>
          </div>

          <div>
            <p className="text-black text-lg font-semibold mb-1">Duration</p>
            <p className="text-base">6 Day 4 Night</p>
          </div>

          <div className="flex items-center justify-start">
            <p className="bg-red-100 text-red-400 px-2 py-1 rounded mb-10">
              Waiting Payment
            </p>
          </div>

          <div>
            <p className="text-black text-lg font-semibold mb-1">
              Accomodation
            </p>
            <p className="text-base">Hotel 4 Nights</p>
          </div>

          <div>
            <p className="text-black text-lg font-semibold mb-1">
              Transportation
            </p>
            <p className="text-base">Qatar Airways</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between">
          <img
            src="../../../../public/order.jpeg"
            alt="payment proof"
            className="w-48 h-auto"
          />
          <p>Upload Payment Proof</p>
        </div>
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">No</th>
            <th className="py-2 px-4 border-b">Full Name</th>
            <th className="py-2 px-4 border-b">Gender</th>
            <th className="py-2 px-4 border-b">Phone</th>
            <th className="py-2 px-4 border-b">Qty</th>
            <th className="py-2 px-4 border-b text-red-600">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b text-center">1</td>
            <td className="py-2 px-4 border-b text-center">Petrus Handika</td>
            <td className="py-2 px-4 border-b text-center">Male</td>
            <td className="py-2 px-4 border-b text-center">083896833112</td>
            <td className="py-2 px-4 border-b text-center">1</td>
            <td
              className="py-2 px-4 border-b text-center text-red-600 font-bold"
            >
              IDR 12,398,000
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="flex flex-row gap-x-5 justify-end px-20 mb-5">
      <button className="text-white bg-red-500 px-14 py-1 rounded outline-none">
        Cancel
      </button>
      <button
        className="text-white bg-green-500 px-14 py-1 rounded outline-none"
      >
        Approve
      </button>
    </div>
  </div>
</template>

<script setup></script>
