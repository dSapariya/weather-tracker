<template>
        <div v-if="$props.isShow" class="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div class="bg-white w-3/4 md:w-1/2 lg:w-1/3 rounded-lg p-4">
        <!-- Search input -->
        <input type="text" v-model="search" @input="getSearchItemsByCity()" placeholder="Search items..." class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500">
        
        <!-- Search results -->
        <ul class="mt-4">
          <li v-for="(searchCity,index) in searchList" :key="index" class="border-b border-gray-300 py-2" @click="addSelectedCity(searchCity)">{{ searchCity.name }},{{searchCity.country  }}</li>
        </ul>
      </div>
    </div>
  <!-- <div>
    <input type="text" placeholder="Search.." v-model="search" @change="getSearchItemsByCity()" />
    <button type="submit" @click="getSearchItemsByCity()"><i class="fa fa-search"></i></button>
  </div>
  <div v-if="searchList.length > 0">
    <div v-for="(searchCity,index) in searchList" :key="index">
        <p @click="addSelectedCity(searchCity)">{{ searchCity.name }},{{searchCity.country  }}</p>
    </div>
  </div> -->
</template>
<script setup>
import { ref } from "vue";
import axios from "axios";
import { useCityListStore } from '@/stores/cities'
import { storeToRefs } from "pinia";
const props = defineProps({
  isShow: Boolean,
});
const emit = defineEmits(["searchData"]);
const store = useCityListStore()
const search = ref('');
const searchList = ref([]);
async function getSearchItemsByCity() {
    console.log("in getSearchItemsByCity");
  axios
    .get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${search.value}&count=10&language=en&format=json`
    )
    .then((response) => {
      searchList.value = response.data ? response.data.results : [];
      console.log("response", response.data);
    });
}
function addSelectedCity(searchCity){
    this.getSearchCityCurrentWeather(searchCity);
    
    
}
async function getSearchCityCurrentWeather(searchCity) {
  axios
    .get(
      `https://api.open-meteo.com/v1/forecast?latitude=${searchCity.latitude}&longitude=${searchCity.longitude}&timezone=GMT&current_weather=true&hourly=precipitation_probability&forecast_hours=1&daily=temperature_2m_min,temperature_2m_max,sunrise,sunset,rain_sum,precipitation_sum`
    )
    .then((response) => {
      searchCity.current_weather = response.data.current_weather;
      searchCity.current_weather_units = response.data.current_weather_units;
      searchCity.daily = response.data.daily;
      searchCity.daily_units = response.data.daily_units;
      console.log("response", searchCity);
    });
    store.addCity(searchCity);
    emit("searchData", false);
}
</script>
