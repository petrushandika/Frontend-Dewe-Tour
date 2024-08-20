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
      className="max-w-[1200px] min-h-screen mx-auto flex flex-col gap-y-5 my-12"
    >
      <div className="overflow-x-auto mb-10 bg-white rounded">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="py-6 px-5 border-b text-start">No</th>
              <th className="py-6 px-5 border-b text-start">Full Name</th>
              <th className="py-6 px-5 border-b text-start">Trip</th>
              <th className="py-6 px-5 border-b text-start">Bukti Transfer</th>
              <th className="py-6 px-5 border-b text-start">Status Payment</th>
              <th className="py-6 px-5 border-b text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-6 px-5 border-b text-start">1</td>
              <td className="py-6 px-5 border-b text-start">Petrus Handika</td>
              <td className="py-6 px-5 border-b text-start">
                6D/4N Fun Tassie Vacation
              </td>
              <td className="py-6 px-5 border-b text-start">BCA</td>
              <td className="py-6 px-5 border-b text-start text-orange-400">
                Pending
              </td>
              <td className="py-6 px-5 border-b text-start">
                <i className="pi pi-search"></i>
              </td>
            </tr>
            <tr>
              <td className="py-6 px-5 border-b text-start">2</td>
              <td className="py-6 px-5 border-b text-start">Amanda Johnson</td>
              <td className="py-6 px-5 border-b text-start">
                5D/4N Bali Adventure
              </td>
              <td className="py-6 px-5 border-b text-start">Mandiri</td>
              <td className="py-6 px-5 border-b text-start text-green-500">
                Approve
              </td>
              <td className="py-6 px-5 border-b text-start">
                <i className="pi pi-search"></i>
              </td>
            </tr>
            <tr>
              <td className="py-6 px-5 border-b text-start">3</td>
              <td className="py-6 px-5 border-b text-start">Michael Lee</td>
              <td className="py-6 px-5 border-b text-start">
                4D/3N Japan Explorer
              </td>
              <td className="py-6 px-5 border-b text-start">BNI</td>
              <td className="py-6 px-5 border-b text-start text-orange-400">
                Pending
              </td>
              <td className="py-6 px-5 border-b text-start">
                <i className="pi pi-search"></i>
              </td>
            </tr>
            <tr>
              <td className="py-6 px-5 border-b text-start">4</td>
              <td className="py-6 px-5 border-b text-start">Sara Smith</td>
              <td className="py-6 px-5 border-b text-start">
                3D/2N Singapore Getaway
              </td>
              <td className="py-6 px-5 border-b text-start">BRI</td>
              <td className="py-6 px-5 border-b text-start text-red-500">
                Cancel
              </td>
              <td className="py-6 px-5 border-b text-start">
                <i className="pi pi-search"></i>
              </td>
            </tr>
            <tr>
              <td className="py-6 px-5 border-b text-start">5</td>
              <td className="py-6 px-5 border-b text-start">David Kim</td>
              <td className="py-6 px-5 border-b text-start">
                7D/6N European Tour
              </td>
              <td className="py-6 px-5 border-b text-start">BCA</td>
              <td className="py-6 px-5 border-b text-start text-green-500">
                Approve
              </td>
              <td className="py-6 px-5 border-b text-start">
                <i className="pi pi-search"></i>
              </td>
            </tr>
            <tr>
              <td className="py-6 px-5 border-b text-start">6</td>
              <td className="py-6 px-5 border-b text-start">Emily Clark</td>
              <td className="py-6 px-5 border-b text-start">
                4D/3N New Zealand Adventure
              </td>
              <td className="py-6 px-5 border-b text-start">Mandiri</td>
              <td className="py-6 px-5 border-b text-start text-orange-400">
                Pending
              </td>
              <td className="py-6 px-5 border-b text-start">
                <i className="pi pi-search"></i>
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
