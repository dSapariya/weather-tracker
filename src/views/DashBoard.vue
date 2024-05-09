<template>
  <main>
    <div class="flex flex-col h-screen">
      <!-- Navigation bar -->
      <nav class="flex justify-between items-center bg-gray-800 p-4">
        <div>
          <!-- Add button -->
          <button class="text-white mr-4" @click="handleAddClick">Add</button>
          <!-- Settings button -->
          <button class="text-white" @click="handleSettingsClick">Settings</button>
        </div>
      </nav>
      <SearchList :isShow="isShow" v-if="isShow" @searchData="searchData"/>
      <!-- Card content -->
      <div class="flex-1 p-4 overflow-y-auto">
        <!-- Your card content goes here -->
        <div class="bg-white shadow-md p-4 rounded-lg">
          <h1 class="text-xl font-bold">weather-tracker</h1>
          <div
            class="flex flex-col items-center justify-center w-screen min-h-screen text-gray-700 p-10 bg-gradient-to-br from-blue-400 via-purple-200 to-indigo-200"
          >
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
import {ref} from 'vue';
import CityList from "../components/CityList.vue";
import SearchList from "../components/SearchList.vue";
const isShow = ref(false);
function handleAddClick(){
  isShow.value = !isShow.value
}
function searchData(val){
  isShow.value = val
}
</script>
