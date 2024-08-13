<template>
  <VueDraggableNext class="dragArea list-group gap-4 w-full" :list="cityList" v-if="cityList.length > 0">
    <div v-for="(city, index) in cityList" :key="index" class="max-w-md mx-auto rounded-md mb-4 relative">
      <button @click="getCityData(city.uuid)" data-modal-target="deleteModal" data-modal-toggle="deleteModal"
        type="button"
        class="absolute top-0 right-0 p-2 bg-blue-500 text-white rounded transition-opacity opacity-0 hover:opacity-100 z-10 absolute top-1 right-2 p-2 bg-white rounded-full transition-opacity absolute bg-transparent text-gray-600 hover:text-gray-800 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg">
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div class="p-4" @click="toggleCard(city.uuid)">
        <div class="mx-auto flex justify-center">

          <div class="flex flex-wrap">
            <div class="w-full px-2 mt-2">

              <div
                class="text-black relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm mb-4 w-full bg-white dark:bg-gray-600">

                <div class="px-6 py-6 relative mt-10">

                  <div class="flex items-center justify-center">
                    <div class="font-bold text-3xl"> {{ city.name }},{{ city.country_code }}</div>
                  </div>
                  <div class="flex justify-between">
                    <div class="flex flex-col justify-between">
                      <div
                        class="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">

                        <div v-if="city && city.weather_code">

                          <div v-if="city.weather_code == 'Sunny'">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                              class="w-24 h-24 p-2 dark:text-yellow-600 fill-current">
                              <path
                                d="M256,104c-83.813,0-152,68.187-152,152s68.187,152,152,152,152-68.187,152-152S339.813,104,256,104Zm0,272A120,120,0,1,1,376,256,120.136,120.136,0,0,1,256,376Z">
                              </path>
                              <rect width="32" height="48" x="240" y="16"></rect>
                              <rect width="32" height="48" x="240" y="448"></rect>
                              <rect width="48" height="32" x="448" y="240"></rect>
                              <rect width="48" height="32" x="16" y="240"></rect>
                              <rect width="32" height="45.255" x="400" y="393.373" transform="rotate(-45 416 416)">
                              </rect>
                              <rect width="32.001" height="45.255" x="80" y="73.373" transform="rotate(-45 96 96)">
                              </rect>
                              <rect width="45.255" height="32" x="73.373" y="400"
                                transform="rotate(-45.001 96.002 416.003)"></rect>
                              <rect width="45.255" height="32.001" x="393.373" y="80" transform="rotate(-45 416 96)">
                              </rect>
                            </svg>

                          </div>

                          <div v-if="city.weather_code == 'Rainy'">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                              class="w-12 h-12 fill-current">
                              <path
                                d="M398.2,137.208a144.013,144.013,0,0,0-284.545.979,122.364,122.364,0,0,0-64.357,32.926A109.4,109.4,0,0,0,16,249.619c0,31.119,12.789,60.762,36.01,83.469q2.84,2.776,5.845,5.347l11.327-33.981C56.091,289.3,48,270.017,48,249.619c0-42.362,35.724-78.015,81.329-81.168l14.055-.972.814-14.065a111.995,111.995,0,0,1,223.589-.22l.891,14.888,14.913.155c46.592.488,80.409,34.714,80.409,81.382,0,33.152-16.706,61.38-41.84,75.9L409.032,364.9a110.012,110.012,0,0,0,54.938-32.358C484.625,310.339,496,280.889,496,249.619,496,190.507,454.859,144.4,398.2,137.208Z">
                              </path>
                              <polygon points="126.029 496 159.817 496 223.153 309.136 192.847 298.864 126.029 496">
                              </polygon>
                              <polygon points="294.029 496 327.817 496 391.153 309.136 360.847 298.864 294.029 496">
                              </polygon>
                              <polygon points="290.11 251.033 225.781 448 259.445 448 320.529 260.967 290.11 251.033">
                              </polygon>
                              <polygon points="128.791 251.033 64.461 448 98.125 448 159.209 260.967 128.791 251.033">
                              </polygon>
                            </svg>
                          </div>


                          <div v-if="city.weather_code == 'Cloudy'">
                            <svg class="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z">
                              </path>
                            </svg>

                          </div>
                        </div>
                      </div>
                      <div class="flex flex-row items-center justify-center mt-6">
                        <div class="font-medium text-2xl">{{ city && city.weather_code ? city.weather_code : '' }}</div>
                        <div class="flex flex-col items-center ml-6">
                          <div></div>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-col justify-between mt-6" v-if="city.current_weather && city.daily_data">
                      <div class="flex flex-col items-center">
                        <div class="font-medium text-sm">Temperature</div>
                        <div class="text-sm text-gray-500">{{ city.current_weather.temperature }}
                          {{ city.current_weather_units.temperature }}</div>
                      </div>
                      <div class="flex flex-col items-center">
                        <div class="font-medium text-sm">WindSpeed</div>
                        <div class="text-sm text-gray-500">{{ city.current_weather.windspeed }}
                          {{ city.current_weather_units.windspeed }}</div>
                      </div>
                      <div class="flex flex-col items-center" v-if="precipitation_probability_max">
                        <div class="font-medium text-sm">Precipitation</div>
                        <div class="text-sm text-gray-500">{{
                            city.daily_data[moment().format("YYYY-MM-DD")][
                            "precipitation_probability_max"
                            ]
                        }}
                          {{ city.daily_units.precipitation_probability_max }}</div>
                      </div>
                    </div>
                  </div>
                  <div class="block sm:flex justify-between items-center flex-wrap invisible">
                    <div class="w-full sm:w-1/2">
                      <div class="flex justify-between items-center">
                        <span>Temp</span><small class="px-2 inline-block">39.11&nbsp;&deg;</small>
                      </div>
                    </div>
                    <div class="w-full sm:w-1/2">
                      <div class="flex justify-between items-center">
                        <span>Feels like</span><small class="px-2 inline-block">33.33&nbsp;&deg;</small>
                      </div>
                    </div>
                    <div class="w-full sm:w-1/2">
                      <div class="flex justify-between items-center">
                        <span>Temp min</span><small class="px-2 inline-block">24.9&nbsp;&deg;</small>
                      </div>
                    </div>
                    <div class="w-full sm:w-1/2">
                      <div class="flex justify-between items-center">
                        <span>Temp max</span><small class="px-2 inline-block">39&nbsp;&deg;</small>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-if="expandedCard === city.uuid">
                  <div class="divider table mx-2 text-center bg-transparent whitespace-nowrap"></div>
                  <div class="px-6 py-6 relative flex items-center justify-center">
                    <div v-for="(week, weekIndex) in city.daily_data" :key="weekIndex" class="week-card"
                      style="flex-flow: initial">
                      <div>
                        <span class="block my-1">{{ moment(week.time).format("DD") }}/{{
                            moment(week.time).format("MM")
                        }}</span><img src="https://i.imgur.com/ffgW9JQ.png" class="block w-8 h-8" />
                        <span class="block my-1">
                          {{ moment(week.sunrise).format("hh:mm A") }}</span>
                        <span class="block my-1">{{
                            moment(week.sunset).format("hh:mm A")
                        }}</span>
                        <span class="block my-1">{{ week.temperature_2m_max }}
                          {{ city.daily_units.temperature_2m_max }}</span>
                        <span class="block my-1">{{ week.temperature_2m_min }}
                          {{ city.daily_units.temperature_2m_min }}</span>
                        <span class="block my-1">{{ week.rain_sum }} {{ city.daily_units.rain_sum }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </VueDraggableNext>

  <div id="deleteModal" tabindex="-1" aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
    <div class="relative p-4 w-full max-w-md h-full md:h-auto">
      <div class="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
        <button type="button"
          class="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-toggle="deleteModal">
          <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <svg class="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto" aria-hidden="true" fill="currentColor"
          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clip-rule="evenodd"></path>
        </svg>
        <p class="mb-4 text-gray-500 dark:text-gray-300">
          Are you sure you want to delete this city?
        </p>
        <div class="flex justify-center items-center space-x-4">
          <button data-modal-toggle="deleteModal" type="button"
            class="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
            No, cancel
          </button>
          <button data-modal-toggle="deleteModal" type="submit" @click="removeCity()"
            class="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
            Yes, I'm sure
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-if="isLoading"
    class="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-gray-200 bg-opacity-75">
    <div class="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
      <div class="loader"></div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, getCurrentInstance, computed } from "vue";
import { useCityListStore } from "@/stores/cities";
import { VueDraggableNext } from "vue-draggable-next";
import { storeToRefs } from "pinia";
import { initFlowbite } from "flowbite";
import moment from "moment";
const store = useCityListStore();
const cityIndex = ref("");
const { cityList } = storeToRefs(store);
const isLoading = ref(true);
const isMetric = computed(() => store.getSetting);
const expandedCard = ref("");

onMounted(async () => {
  // initFlowbite();
  await getTempDetails();
});
function toggleCard(cityId) {
  if (expandedCard.value === cityId) {
    expandedCard.value = null;
  } else {
    expandedCard.value = cityId;
  }
}
async function getTempDetails() {
  if(cityList.value.length > 0){
    const requests = cityList.value.map((city) => {
    const { $axios } = getCurrentInstance().appContext.config.globalProperties;
    var url = "";
    if (!isMetric.value) {
      url = `?latitude=${city.latitude}&longitude=${city.longitude}&timezone=GMT&current_weather=true&hourly=precipitation_probability&forecast_hours=1&daily=temperature_2m_min,temperature_2m_max,sunrise,sunset,rain_sum,precipitation_sum,precipitation_probability_max,weather_code`;
    } else {
      url = `?latitude=${city.latitude}&longitude=${city.longitude}&timezone=GMT&current_weather=true&hourly=precipitation_probability&forecast_hours=1&daily=temperature_2m_min,temperature_2m_max,sunrise,sunset,rain_sum,precipitation_sum,precipitation_probability_max,weather_code&temperature_unit=fahrenheit&wind_speed_unit=mph`;
    }
    return $axios.get(url);
  });
  const responses = await Promise.all(requests);
  responses.forEach((response, index) => {
    cityList.value[index].uuid = Math.random().toString(36).substr(2, 9);
    cityList.value[index].current_weather = response.data.current_weather;
    cityList.value[index].current_weather_units = response.data.current_weather_units;
    cityList.value[index].daily_units = response.data.daily_units;
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
    cityList.value[index].daily_data = rearrangedData;
    cityList.value[index].weather_code = rearrangedData[moment().format("YYYY-MM-DD")].weather_code;
  });

  }
  isLoading.value = false;
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
function removeCity() {
  isLoading.value = true;
  store.deleteCity(cityIndex.value);
  isLoading.value = false;
}
function getCityData(index) {
  cityIndex.value = index;
}
</script>
<style>
.city-card {
  width: 500px;
  height: 300px;
  max-width: 500px;
  max-height: 300px;
}

.additional-data {
  display: block;
}

.expanded .additional-data {
  display: block;
}

.week-card {
  width: 100px;
}

.card {
  width: 500%;
}
</style>
