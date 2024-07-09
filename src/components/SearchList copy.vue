<template>
  <div
    v-if="$props.isShow"
    class="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50"
  >
    <div class="bg-white w-3/4 md:w-1/2 lg:w-1/3 rounded-lg p-4 relative">
      <input
        type="text"
        v-model="search"
        @input="getSearchItemsByCity()"
        placeholder="Search by cities..."
        class="w-full border border-gray-300 rounded-md px-4 py-2 mt-10 focus:outline-none focus:border-blue-500"
      />
      <button
        @click="closeSearchPopup"
        class="absolute top-0 right-0 p-2 bg-white rounded-full"
      >
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <ul class="mt-4">
        <div role="status" v-if="isLoading">
          <svg
            aria-hidden="true"
            class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>

        <li
          v-for="(searchCity, index) in searchList"
          :key="index"
          class="border-b border-gray-300 py-2"
          @click="addSelectedCity(searchCity)"
        >
          {{ searchCity.name }},{{ searchCity.country }}
        </li>
        <span v-if="!isLoading && searchList.length == 0">{{ errorMsg }}</span>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref, getCurrentInstance, computed } from "vue";
import axios from "axios";
import { useCityListStore } from "@/stores/cities";
import moment from "moment";
const props = defineProps({
  isShow: Boolean,
});
const emit = defineEmits(["searchData"]);
const store = useCityListStore();
const search = ref("");
const searchList = ref([]);
const errorMsg = ref("");
const isLoading = ref(false);

const { $axios } = getCurrentInstance().appContext.config.globalProperties;
const isMetric = computed(() => store.getSetting);
async function getSearchItemsByCity() {
  isLoading.value = true;
  axios
    .get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${search.value}&count=10&language=en&format=json`
    )
    .then((response) => {
      searchList.value =
        response.data && response.data.results ? response.data.results : [];
      searchList.value.length == 0 ? (errorMsg.value = "Data Not Found...") : "";
      isLoading.value = false;
    });
}
function addSelectedCity(searchCity) {
  getSearchCityCurrentWeather(searchCity);
}
async function getSearchCityCurrentWeather(searchCity) {
  var url = "";
  if (!isMetric.value) {
    url = `?latitude=${searchCity.latitude}&longitude=${searchCity.longitude}&timezone=GMT&current_weather=true&hourly=precipitation_probability&forecast_hours=1&daily=temperature_2m_min,temperature_2m_max,sunrise,sunset,rain_sum,precipitation_sum,precipitation_probability_max,weather_code`;
  } else {
    url = `?latitude=${searchCity.latitude}&longitude=${searchCity.longitude}&timezone=GMT&current_weather=true&hourly=precipitation_probability&forecast_hours=1&daily=temperature_2m_min,temperature_2m_max,sunrise,sunset,rain_sum,precipitation_sum,precipitation_probability_max,weather_code&temperature_unit=fahrenheit&wind_speed_unit=mph`;
  }
  $axios.get(url).then((response) => {
    searchCity.uuid = Math.random().toString(36).substr(2, 9);
    searchCity.current_weather = response.data.current_weather;
    searchCity.current_weather_units = response.data.current_weather_units;
    searchCity.daily_units = response.data.daily_units;
    const rearrangedData = {};
    response.data.daily.time.forEach((day, dayIndex) => {
      rearrangedData[day] = {
        time: day,
        precipitation_probability_max:
          response.data.daily.precipitation_probability_max[dayIndex],
        temperature_2m_min: response.data.daily.temperature_2m_min[dayIndex],
        temperature_2m_max: response.data.daily.temperature_2m_max[dayIndex],
        sunrise: response.data.daily.sunrise[dayIndex],
        sunset: response.data.daily.sunset[dayIndex],
        rain_sum: response.data.daily.rain_sum[dayIndex],
        precipitation_sum: response.data.daily.precipitation_sum[dayIndex],
        weather_code: classifyWeather(response.data.daily.weather_code[dayIndex]),

      };
    });
    searchCity.daily_data = rearrangedData;
    searchCity.weather_code = rearrangedData[moment().format("YYYY-MM-DD")].weather_code;

  });
  store.addCity(searchCity);
  emit("searchData", false);
}
function classifyWeather(weatherCode) {
  if (weatherCode >= 0 && weatherCode <= 3) {
    return "Sunny";
  } else if (weatherCode >= 4 && weatherCode <= 7) {
    return "Cloudy";
  } else {
    return "Rainy";
  }
}
function closeSearchPopup() {
  emit("searchData", false);
}
</script>
