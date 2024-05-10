<template>
  <VueDraggableNext
    class="dragArea list-group gap-4 w-full"
    :list="cityList"
    v-if="cityList.length > 0"
  >
    <div
      v-for="(city, index) in cityList"
      :key="index"
      class="max-w-md mx-auto rounded-md mb-4 relative"
    >
      <button
        @click="getCityData(city.uuid)"
        data-modal-target="deleteModal"
        data-modal-toggle="deleteModal"
        type="button"
        class="absolute top-0 right-0 p-2 bg-blue-500 text-white rounded transition-opacity opacity-0 hover:opacity-100 z-10 absolute top-1 right-2 p-2 bg-white rounded-full transition-opacity absolute bg-transparent text-gray-600 hover:text-gray-800 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg"
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
      <div class="p-4" @click="toggleCard(city.uuid)">
        <div class="mx-auto flex justify-center">
          <div class="flex flex-wrap">
            <div class="w-full px-2 mt-2">
              <div
                class="text-black relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm mb-4 w-full bg-white dark:bg-gray-600"
              >
                <div class="px-6 py-6 relative mt-10">
                  <div class="flex mb-4 justify-between items-center">
                    <div>
                      <h5 class="mb-0 font-medium text-xl">
                        {{ city.name }},{{ city.country_code }}
                      </h5>
                    </div>
                    <div class="flex flex-col">
                      <div class="text-right flex gap-10" v-if="city.current_weather && city.daily_data">
                        <svg
                          class="h-8 w-8 fill-current w"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path
                            d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z"
                          />
                        </svg>
                        <h3 class="font-bold text-2xl mb-0">
                          <span
                            >{{ city.current_weather.temperature }}
                            {{ city.current_weather_units.temperature }}</span
                          >
                        </h3>
                      </div>
                      <div class="text-right flex gap-10" v-if="city.current_weather">
                        <svg
                          class="h-6 w-6 fill-current w"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z"
                          ></path>
                        </svg>
                        <h3 class="font-bold text-2xl mb-0">
                          <span>
                            {{ city.current_weather.windspeed }}
                            {{ city.current_weather_units.windspeed }}</span
                          >
                        </h3>
                      </div>
                      <div class="text-right flex gap-10" v-if="city.current_weather">
                        <svg
                          class="h-6 w-6 fill-current w"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M96 320c-53 0-96-43-96-96c0-42.5 27.6-78.6 65.9-91.2C64.7 126.1 64 119.1 64 112C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80c0 5.5-.6 10.8-1.6 16c.5 0 1.1 0 1.6 0c53 0 96 43 96 96s-43 96-96 96H96zM81.5 353.9c12.2 5.2 17.8 19.3 12.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6S-3.3 490.7 1.9 478.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6zm120 0c12.2 5.2 17.8 19.3 12.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6zm244.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6s17.8 19.3 12.6 31.5zM313.5 353.9c12.2 5.2 17.8 19.3 12.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6z"
                          ></path>
                        </svg>
                        <h3 class="font-bold text-2xl mb-0" v-if="city.daily_data">
                          <span>
                            {{
                              city.daily_data[moment().format("YYYY-MM-DD")][
                                "precipitation_probability_max"
                              ]
                            }}
                            {{ city.daily_units.precipitation_probability_max }}</span
                          >
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div
                    class="block sm:flex justify-between items-center flex-wrap invisible"
                  >
                    <div class="w-full sm:w-1/2">
                      <div class="flex justify-between items-center">
                        <span>Temp</span
                        ><small class="px-2 inline-block">39.11&nbsp;&deg;</small>
                      </div>
                    </div>
                    <div class="w-full sm:w-1/2">
                      <div class="flex justify-between items-center">
                        <span>Feels like</span
                        ><small class="px-2 inline-block">33.33&nbsp;&deg;</small>
                      </div>
                    </div>
                    <div class="w-full sm:w-1/2">
                      <div class="flex justify-between items-center">
                        <span>Temp min</span
                        ><small class="px-2 inline-block">24.9&nbsp;&deg;</small>
                      </div>
                    </div>
                    <div class="w-full sm:w-1/2">
                      <div class="flex justify-between items-center">
                        <span>Temp max</span
                        ><small class="px-2 inline-block">39&nbsp;&deg;</small>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-if="expandedCard === city.uuid">
                  <div
                    class="divider table mx-2 text-center bg-transparent whitespace-nowrap"
                  ></div>
                  <div class="px-6 py-6 relative flex items-center justify-center">
                    <div
                      v-for="(week, weekIndex) in city.daily_data"
                      :key="weekIndex"
                      class="week-card"
                      style="flex-flow: initial"
                    >
                      <div>
                        <span class="block my-1"
                          >{{ moment(week.time).format("DD") }}/{{
                            moment(week.time).format("MM")
                          }}</span
                        ><img
                          src="https://i.imgur.com/ffgW9JQ.png"
                          class="block w-8 h-8"
                        />
                        <span class="block my-1">
                          {{ moment(week.sunrise).format("hh:mm A") }}</span
                        >
                        <span class="block my-1">{{
                          moment(week.sunset).format("hh:mm A")
                        }}</span>
                        <span class="block my-1"
                          >{{ week.temperature_2m_max }}
                          {{ city.daily_units.temperature_2m_max }}</span
                        >
                        <span class="block my-1"
                          >{{ week.temperature_2m_min }}
                          {{ city.daily_units.temperature_2m_min }}</span
                        >
                        <span class="block my-1"
                          >{{ week.rain_sum }} {{ city.daily_units.rain_sum }}</span
                        >
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

  <div
    id="deleteModal"
    tabindex="-1"
    aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
  >
    <div class="relative p-4 w-full max-w-md h-full md:h-auto">
      <div
        class="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5"
      >
        <button
          type="button"
          class="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-toggle="deleteModal"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <svg
          class="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <p class="mb-4 text-gray-500 dark:text-gray-300">
          Are you sure you want to delete this city?
        </p>
        <div class="flex justify-center items-center space-x-4">
          <button
            data-modal-toggle="deleteModal"
            type="button"
            class="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            No, cancel
          </button>
          <button
            data-modal-toggle="deleteModal"
            type="submit"
            @click="removeCity()"
            class="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            Yes, I'm sure
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    v-if="isLoading"
    class="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-gray-200 bg-opacity-75"
  >
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
  initFlowbite();
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
      };
    });
    cityList.value[index].daily_data = rearrangedData;
  });
  isLoading.value = false;
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
</style>
