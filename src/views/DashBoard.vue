<template>
  <main>

    <div class="flex flex-col h-screen">
      <!-- Navigation bar -->
      <nav class="flex justify-between items-center bg-gray-800 p-4">
        <div>
          <!-- Add button -->

          <!-- Settings button -->
          <button class="text-white" @click="handleSettingsClick">
            <svg class="w-[25px] h-[25px] fill-[#8e8e8e]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z">
              </path>
            </svg>
          </button>
        </div>
      </nav>
      <SearchList :isShow="isShow" v-if="isShow" @searchData="searchData" />
      <!-- Card content -->
      <div class="flex-1 p-4 overflow-y-auto">
        <!-- Your card content goes here -->
        <div class="bg-white shadow-md p-4 rounded-lg">
          <h1 class="text-xl font-bold">weather-tracker</h1>
          <button type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            @click="handleAddClick">
            Add
          </button>

          <div
            class="flex flex-col items-center justify-center w-screen min-h-screen text-gray-700 p-10 bg-gradient-to-br from-blue-400 via-purple-200 to-indigo-200">
            <div v-if="isLoading"
              class="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-gray-200 bg-opacity-75">
              <div class="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                <div class="loader"></div>
              </div>
            </div>

            <CityList />
          </div>
        </div>
      </div>
    </div>
    <!-- <div
    class="flex flex-col items-center justify-center w-screen min-h-screen text-gray-700 p-10 bg-gradient-to-br from-blue-400 via-purple-200 to-indigo-200"
  >
    <h1>weather-tracker</h1>

    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>

    <CityList />
    <SearchList />
  </div> -->
  </main>
</template>
<script setup>
import { ref } from "vue";
import CityList from "../components/CityList.vue";
import SearchList from "../components/SearchList.vue";
const isShow = ref(false);
function handleAddClick() {
  isShow.value = !isShow.value;
}
function searchData(val) {
  isShow.value = val;
}
</script>
<style>
/* Loader styles */
.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;
  position: relative;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>