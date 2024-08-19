<template>
  <div>
    <div className="relative overflow-hidden">
      <img
        src="../../../../public/background.png"
        alt="background"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="relative z-10 min-h-fit flex flex-col px-24">
        <Header />
      </div>
    </div>
    <div
      class="max-w-[1200px] min-h-screen mx-auto flex flex-col gap-y-5 my-12"
    >
      <div class="overflow-x-auto mb-10 bg-white rounded">
        <table class="min-w-full">
          <thead>
            <tr>
              <th class="py-6 px-5 border-b text-start">No</th>
              <th class="py-6 px-5 border-b text-start">Full Name</th>
              <th class="py-6 px-5 border-b text-start">Trip</th>
              <th class="py-6 px-5 border-b text-start">Bukti Transfer</th>
              <th class="py-6 px-5 border-b text-start">Status Payment</th>
              <th class="py-6 px-5 border-b text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="py-6 px-5 border-b text-start">1</td>
              <td class="py-6 px-5 border-b text-start">Petrus Handika</td>
              <td class="py-6 px-5 border-b text-start">
                6D/4N Fun Tassie Vacation
              </td>
              <td class="py-6 px-5 border-b text-start">BCA</td>
              <td class="py-6 px-5 border-b text-start text-orange-400">
                Pending
              </td>
              <td class="py-6 px-5 border-b text-start">
                <i class="pi pi-search"></i>
              </td>
            </tr>
            <tr>
              <td class="py-6 px-5 border-b text-start">2</td>
              <td class="py-6 px-5 border-b text-start">Amanda Johnson</td>
              <td class="py-6 px-5 border-b text-start">
                5D/4N Bali Adventure
              </td>
              <td class="py-6 px-5 border-b text-start">Mandiri</td>
              <td class="py-6 px-5 border-b text-start text-green-500">
                Approve
              </td>
              <td class="py-6 px-5 border-b text-start">
                <i class="pi pi-search"></i>
              </td>
            </tr>
            <tr>
              <td class="py-6 px-5 border-b text-start">3</td>
              <td class="py-6 px-5 border-b text-start">Michael Lee</td>
              <td class="py-6 px-5 border-b text-start">
                4D/3N Japan Explorer
              </td>
              <td class="py-6 px-5 border-b text-start">BNI</td>
              <td class="py-6 px-5 border-b text-start text-orange-400">
                Pending
              </td>
              <td class="py-6 px-5 border-b text-start">
                <i class="pi pi-search"></i>
              </td>
            </tr>
            <tr>
              <td class="py-6 px-5 border-b text-start">4</td>
              <td class="py-6 px-5 border-b text-start">Sara Smith</td>
              <td class="py-6 px-5 border-b text-start">
                3D/2N Singapore Getaway
              </td>
              <td class="py-6 px-5 border-b text-start">BRI</td>
              <td class="py-6 px-5 border-b text-start text-red-500">Cancel</td>
              <td class="py-6 px-5 border-b text-start">
                <i class="pi pi-search"></i>
              </td>
            </tr>
            <tr>
              <td class="py-6 px-5 border-b text-start">5</td>
              <td class="py-6 px-5 border-b text-start">David Kim</td>
              <td class="py-6 px-5 border-b text-start">7D/6N European Tour</td>
              <td class="py-6 px-5 border-b text-start">BCA</td>
              <td class="py-6 px-5 border-b text-start text-green-500">
                Approve
              </td>
              <td class="py-6 px-5 border-b text-start">
                <i class="pi pi-search"></i>
              </td>
            </tr>
            <tr>
              <td class="py-6 px-5 border-b text-start">6</td>
              <td class="py-6 px-5 border-b text-start">Emily Clark</td>
              <td class="py-6 px-5 border-b text-start">
                4D/3N New Zealand Adventure
              </td>
              <td class="py-6 px-5 border-b text-start">Mandiri</td>
              <td class="py-6 px-5 border-b text-start text-orange-400">
                Pending
              </td>
              <td class="py-6 px-5 border-b text-start">
                <i class="pi pi-search"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import "primeicons/primeicons.css";
import Header from "../../../components/Layout/Header.vue";
import Footer from "../../../components/Layout/Footer.vue";
</script>
