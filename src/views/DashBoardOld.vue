<template>
  <div class="flex flex-col h-screen p-5">
    <Setting></Setting>
    <SearchList :isShow="isShow" v-if="isShow" @searchData="searchData" />
    <div class="flex-1 overflow-y-auto">
      <div class="bg-white shadow-md rounded-lg">
        <div
          class="flex flex-col items-center justify-center w-screen min-h-screen text-gray-700 p-10 bg-gradient-to-br from-blue-400 via-purple-200 to-indigo-200"
        >
          <div class="flex justify-between">
            <div></div>
            <div>
              <a href="#" class="text-gray-800 hover:text-gray-700">
                <button
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  @click="handleAddClick"
                >
                  Add
                </button>
              </a>
            </div>
          </div>
          <CityList />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import CityList from "../components/CityList.vue";
import SearchList from "../components/SearchList.vue";
import Setting from "../components/UnitSetting.vue";
const isShow = ref(false);
function handleAddClick() {
  isShow.value = !isShow.value;
}
function searchData(val) {
  isShow.value = val;
}
</script>
