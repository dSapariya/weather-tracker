<template>

  <div class="search-container">
    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
        width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z" />
      </svg>

    </div>
    <input
        type="text"
        v-model="search"
        @input="getSearchItemsByCity()"
        placeholder="Search by cities..."
        class="search-box bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
  
    <div v-if="isExpanded && searchList.length > 0" class="search-results">
      <ul>
        <li  v-for="(searchCity, index) in searchList" :key="index" >
         <p  @click="addSelectedCity(searchCity)">{{ searchCity.name }},{{ searchCity.country }}</p>
        </li>
        
      </ul>
      <ul class="mt-4">
    

       
       
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance, computed } from "vue";
import axios from "axios";
import { useCityListStore } from "@/stores/cities";
import moment from "moment-timezone";

const emit = defineEmits(["searchData"]);
const store = useCityListStore();
const search = ref("");
const searchList = ref([]);
const errorMsg = ref("");
const isLoading = ref(false);
const isExpanded = ref(false);

const { $axios } = getCurrentInstance().appContext.config.globalProperties;
const isMetric = computed(() => store.getSetting);
async function getSearchItemsByCity() {
  isLoading.value = true;
  isExpanded.value = true;
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
  isExpanded.value = false;
  getSearchCityCurrentWeather(searchCity);
 
}

async function getSearchCityCurrentWeather(searchCity) {
  
  let data = [searchCity];
  const requests = data.map((city) => {
        var url = "";
        if (!isMetric.value) {
            url = `?latitude=${city.latitude}&longitude=${city.longitude}&timezone=GMT&current_weather=true&hourly=temperature_2m,relative_humidity_2m,visibility,precipitation_probability,weather_code&forecast_hours=24&forecast_minutely_15=4&daily=temperature_2m_min,uv_index_max,uv_index_clear_sky_max,temperature_2m_max,sunrise,sunset,rain_sum,precipitation_sum,precipitation_probability_max,weather_code`;
        } else {
            url = `?latitude=${city.latitude}&longitude=${city.longitude}&timezone=GMT&current_weather=true&hourly=temperature_2m,relative_humidity_2m,visibility,precipitation_probability,weather_code&forecast_hours=24&forecast_minutely_15=4&daily=temperature_2m_min,uv_index_max,uv_index_clear_sky_max,temperature_2m_max,sunrise,sunset,rain_sum,precipitation_sum,precipitation_probability_max,weather_code&temperature_unit=fahrenheit&wind_speed_unit=mph`;
        }
        return $axios.get(url);
    });
    const responses = await Promise.all(requests);
    // responses.forEach((response, index) => {
    //     data[index].uuid = Math.random().toString(36).substr(2, 9);
    //     data[index].current_weather = response.data.current_weather;
    //     data[index].current_weather_units = response.data.current_weather_units;
    //     data[index].daily_units = response.data.daily_units;
    //     const rearrangedData = {};
    //     response.data.daily.time.forEach((day, dayIndex) => {
    //         rearrangedData[day] = {
    //             time: day,
    //             precipitation_probability_max:
    //                 response.data.daily.precipitation_probability_max[dayIndex],
    //             temperature_2m_min: response.data.daily.temperature_2m_min[dayIndex],
    //             temperature_2m_max: response.data.daily.temperature_2m_max[dayIndex],
    //             sunrise: response.data.daily.sunrise[dayIndex],
    //             sunset: response.data.daily.sunset[dayIndex],
    //             rain_sum: response.data.daily.rain_sum[dayIndex],
    //             precipitation_sum: response.data.daily.precipitation_sum[dayIndex],
    //             weather_code: classifyWeather(response.data.daily.weather_code[dayIndex]),
    //         };
    //     });
    //     data[index].daily_data = rearrangedData;
    //     data[index].weather_code = rearrangedData[moment().format("YYYY-MM-DD")].weather_code;
    // });

    responses.forEach((response, index) => {
        data[index].uuid = Math.random().toString(36).substr(2, 9);
        data[index].current_weather = response.data.current_weather;
        data[index].current_weather_units = response.data.current_weather_units;
        data[index].daily_units = response.data.daily_units;
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
        data[index].uv_index_max = response.data.daily.uv_index_max.length > 0 ? response.data.daily.uv_index_max[0] : 0;
        const rearrangedDataHours = {};
        response.data.hourly.time.forEach((hours, hoursIndex) => {
            const dateTime = moment(hours, 'YYYY-MM-DDTHH:mm');
            const dateTimeIST = dateTime.tz('Asia/Kolkata');
            const now = moment();
            const todayDate = now.format('YYYY-MM-DD');
            const curr = dateTime.format('YYYY-MM-DD');
            if (todayDate == curr && now.format('HH') < dateTime.format('HH')) {
                rearrangedDataHours[dateTimeIST.format('HH:mm')] = {
                    time: dateTimeIST.format('HH:mm'),
                    temperature_2m: response.data.hourly.temperature_2m[hoursIndex],
                    weather_code: classifyWeather(response.data.hourly.weather_code[hoursIndex]),
                };
            }

        });
        data[index].hourly_data = response.data.hourly
        data[index].hourly_units = response.data.hourly_units
        data[index].daily_data = rearrangedData;
        data[index].per_hour_data = rearrangedDataHours;
        data[index].weather_code = rearrangedData[moment().format("YYYY-MM-DD")].weather_code;
    });

  isExpanded.value = false;
  search.value = ''
  store.addCity(searchCity);
 
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

function expandSearchBox() {
      isExpanded.value = true;
    }
   function collapseSearchBox() {
      setTimeout(() => {
        isExpanded.value = false;
      }, 200);  // Adjust delay as needed
    }
</script>
<style scoped>
.search-container {
  position: relative;
  width: 300px;
  /* Adjust width as needed */
  margin: auto;
}

.search-box {
  width: 100%;
  font-size: 16px;
  border: 1px solid #ccc;
  transition: border-color 0.3s ease;
}

.search-box:focus {
  border-color: #007bff;
  /* Example of focusing style */
}

.search-results {
  height: 300px;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  border-radius: 3%;
  margin-top: 5px;
  background: #f9fafb;
  overflow-y: auto;
  scrollbar-width: thin;
}

.search-results ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.search-results li {
  padding: 10px;
  cursor: pointer;
}

.search-results li:hover {
  background-color: #f0f0f0;
}
</style>
