<template>
  <div id="accordion-collapse1" data-accordion="collapse" v-if="cityList.length > 0">
    <div v-for="(city, index) in cityList" :key="index">
      <h2
        :id="'accordion-collapse-heading-' + index"
        class="flex justify-center font-medium mb-5 text-gray-800 border-gray-200 rounded-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:hover:text-gray-400  dark:hover:bg-gray-800 gap-3"
      >
        <button
          type="button"
          :data-accordion-target="'#accordion-collapse-body-' + index"
          aria-expanded="false"
          :aria-controls="'accordion-collapse-body-' + index"
        >
          <div
            class="w-full max-w-screen-sm bg-white p-10 rounded-xl "
            v-if="city.current_weather"
          >
            <div class="flex justify-between">
              <div class="flex flex-col">
                <span class="text-6xl font-bold"
                  >{{ city.current_weather.temperature }}
                  {{ city.current_weather_units.temperature }}</span
                >
                <span class="font-semibold mt-1 text-gray-500"
                  >{{ city.name }}, {{ city.country }}</span
                >
              </div>
              <div class="flex flex-col">
                <div class="flex">
                  <svg
                    class="h-8 w-8 fill-current w mb-5"
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
                  <span class="ml-5"
                    >{{ city.current_weather.temperature }}
                    {{ city.current_weather_units.temperature }}</span
                  >
                </div>
                <div class="flex">
                  <svg
                    class="h-8 w-8 fill-current w mb-5"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z"
                    ></path>
                  </svg>
                  <span class="ml-5"
                    >{{ city.current_weather.windspeed }}
                    {{ city.current_weather_units.windspeed }}</span
                  >
                </div>
                <div class="flex">
                  <svg
                    class="h-8 w-8 fill-current w"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M96 320c-53 0-96-43-96-96c0-42.5 27.6-78.6 65.9-91.2C64.7 126.1 64 119.1 64 112C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80c0 5.5-.6 10.8-1.6 16c.5 0 1.1 0 1.6 0c53 0 96 43 96 96s-43 96-96 96H96zM81.5 353.9c12.2 5.2 17.8 19.3 12.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6S-3.3 490.7 1.9 478.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6zm120 0c12.2 5.2 17.8 19.3 12.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6zm244.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6s17.8 19.3 12.6 31.5zM313.5 353.9c12.2 5.2 17.8 19.3 12.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6z"
                    ></path>
                  </svg>
                  <span class="ml-5"
                    >{{ city.current_weather.temperature }}
                    {{ city.current_weather_units.temperature }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </button>
      </h2>
      <div
        :id="'accordion-collapse-body-' + index"
        class="hidden"
        :aria-labelledby="'accordion-collapse-heading-' + index"
      >
        <!-- <div
          class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
        > -->
      
        <div v-if="city.daily && city.daily.time.length > 0" class="mb-10 flex bg-white w-[100%] p-10 mt-10 rounded-xl ring-8 ring-white ring-opacity-40" >
		<div class="flex flex-col justify-between items-center " v-for="(week,weekIndex) in city.daily.time" :key="weekIndex">
			<span class="font-semibold text-lg  pr-10 mb-5">{{ moment(week).format("DD") }}/{{ moment(week).format("MM") }}</span>
            <span class="font-semibold text-lg  pr-10">{{ moment(city.daily.sunrise[weekIndex]).format("hh:mm A") }}</span>
            <span class="font-semibold text-lg  pr-10">{{ moment(city.daily.sunset[weekIndex]).format("hh:mm A") }}</span>
            <span class="font-semibold text-lg  pr-10">{{ city.daily.temperature_2m_max[weekIndex] }} {{  city.daily_units.temperature_2m_max }}</span>
            <span class="font-semibold text-lg  pr-10">{{ city.daily.temperature_2m_min[weekIndex] }} {{  city.daily_units.temperature_2m_min }}</span>
            <span class="font-semibold text-lg  pr-10">{{ city.daily.rain_sum[weekIndex] }} {{  city.daily_units.rain_sum }}</span>

			<div class="flex items-center justify-end pr-10">
				<!-- <svg class="w-6 h-6 fill-current ml-1" viewBox="0 0 16 20" version="1.1" xmlns="http://www.w3.org/2000/svg" >
					<g transform="matrix(1,0,0,1,-4,-2)">
						<path d="M17.66,8L12.71,3.06C12.32,2.67 11.69,2.67 11.3,3.06L6.34,8C4.78,9.56 4,11.64 4,13.64C4,15.64 4.78,17.75 6.34,19.31C7.9,20.87 9.95,21.66 12,21.66C14.05,21.66 16.1,20.87 17.66,19.31C19.22,17.75 20,15.64 20,13.64C20,11.64 19.22,9.56 17.66,8ZM6,14C6.01,12 6.62,10.73 7.76,9.6L12,5.27L16.24,9.65C17.38,10.77 17.99,12 18,14C18.016,17.296 14.96,19.809 12,19.74C9.069,19.672 5.982,17.655 6,14Z" style="fill-rule:nonzero;"/>
					</g>
				</svg> -->
			</div>
			<!-- <svg class="h-8 w-8 fill-current w-1/4" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z"/></svg>
			<span class="font-semibold text-lg w-1/4 text-right">18° / 32°</span> -->
		</div>
		
	<!-- </div> -->
        </div>
      </div>
    </div>
  </div>

  <!-- <div
    id="accordion-collapse"
    data-accordion="collapse"
    v-for="(city, index) in cityList"
    :key="index"
  >
    <div>
      <h2 :id="'accordion-collapse-heading-' + index">
        <button
          type="button"
          class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          :data-accordion-target="'#accordion-collapse-body-' + index"
          aria-expanded="true"
          :aria-controls="'accordion-collapse-body-' + index"
        >
          <div
            class="w-full max-w-screen-sm bg-white p-10 rounded-xl ring-8 ring-white ring-opacity-40"
          >
            <div class="flex justify-between">
              <div class="flex flex-col">
                <span class="text-6xl font-bold">29°C</span>
                <span class="font-semibold mt-1 text-gray-500">Mudjimba, QLD</span>
              </div>
              <svg
                class="h-24 w-24 fill-current text-yellow-400"
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
            </div>
            <div class="flex justify-between mt-12">
              <div class="flex flex-col items-center">
                <span class="font-semibold text-lg">29°C</span>
                <svg
                  class="h-10 w-10 fill-current text-gray-400 mt-3"
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
                <span class="font-semibold mt-1 text-sm">11:00</span>
                <span class="text-xs font-semibold text-gray-400">AM</span>
              </div>
              <div class="flex flex-col items-center">
                <span class="font-semibold text-lg">31°C</span>
                <svg
                  class="h-10 w-10 fill-current text-gray-400 mt-3"
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
                <span class="font-semibold mt-1 text-sm">1:00</span>
                <span class="text-xs font-semibold text-gray-400">PM</span>
              </div>
              <div class="flex flex-col items-center">
                <span class="font-semibold text-lg">32°C</span>
                <svg
                  class="h-10 w-10 fill-current text-gray-400 mt-3"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M12.01 6c2.61 0 4.89 1.86 5.4 4.43l.3 1.5 1.52.11c1.56.11 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3h-13c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.95 6 12.01 6m0-2C9.12 4 6.6 5.64 5.35 8.04 2.35 8.36.01 10.91.01 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96C18.68 6.59 15.65 4 12.01 4z"
                  />
                </svg>
                <span class="font-semibold mt-1 text-sm">3:00</span>
                <span class="text-xs font-semibold text-gray-400">PM</span>
              </div>
              <div class="flex flex-col items-center">
                <span class="font-semibold text-lg">31°C</span>
                <svg
                  class="h-10 w-10 fill-current text-gray-400 mt-3"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M12.01 6c2.61 0 4.89 1.86 5.4 4.43l.3 1.5 1.52.11c1.56.11 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3h-13c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.95 6 12.01 6m0-2C9.12 4 6.6 5.64 5.35 8.04 2.35 8.36.01 10.91.01 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96C18.68 6.59 15.65 4 12.01 4z"
                  />
                </svg>
                <span class="font-semibold mt-1 text-sm">5:00</span>
                <span class="text-xs font-semibold text-gray-400">PM</span>
              </div>
              <div class="flex flex-col items-center">
                <span class="font-semibold text-lg">27°C</span>
                <svg
                  class="h-10 w-10 fill-current text-gray-400 mt-3"
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <g>
                    <rect fill="none" height="24" width="24" />
                  </g>
                  <g>
                    <g>
                      <path
                        d="M19.78,17.51c-2.47,0-6.57-1.33-8.68-5.43C8.77,7.57,10.6,3.6,11.63,2.01C6.27,2.2,1.98,6.59,1.98,12 c0,0.14,0.02,0.28,0.02,0.42C2.61,12.16,3.28,12,3.98,12c0,0,0,0,0,0c0-3.09,1.73-5.77,4.3-7.1C7.78,7.09,7.74,9.94,9.32,13 c1.57,3.04,4.18,4.95,6.8,5.86c-1.23,0.74-2.65,1.15-4.13,1.15c-0.5,0-1-0.05-1.48-0.14c-0.37,0.7-0.94,1.27-1.64,1.64 c0.98,0.32,2.03,0.5,3.11,0.5c3.5,0,6.58-1.8,8.37-4.52C20.18,17.5,19.98,17.51,19.78,17.51z"
                      />
                      <path
                        d="M7,16l-0.18,0C6.4,14.84,5.3,14,4,14c-1.66,0-3,1.34-3,3s1.34,3,3,3c0.62,0,2.49,0,3,0c1.1,0,2-0.9,2-2 C9,16.9,8.1,16,7,16z"
                      />
                    </g>
                  </g>
                </svg>
                <span class="font-semibold mt-1 text-sm">7:00</span>
                <span class="text-xs font-semibold text-gray-400">PM</span>
              </div>
            </div>
          </div>
        </button>
      </h2>
      <div
        :id="'accordion-collapse-body-' + index"
        class="hidden"
        :aria-labelledby="'accordion-collapse-heading-' + index"
      >
        <div
          class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
        >
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of
            Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to
            <a
              href="/docs/getting-started/introduction/"
              class="text-blue-600 dark:text-blue-500 hover:underline"
              >get started</a
            >
            and start developing websites even faster with components on top of Tailwind
            CSS.
          </p>
        </div>
      </div>
    </div>
  </div> -->
  <!-- 
  <div
    class="w-full max-w-screen-sm bg-white p-10 rounded-xl ring-8 ring-white ring-opacity-40 mb-10"
    v-for="(city, index) in cityList"
    :key="index"
  >
    <div class="flex justify-between">
      <div class="flex flex-col">
        <span class="text-6xl font-bold"
          >{{ city.current_weather.temperature }}
          {{ city.current_weather_units.temperature }}</span
        >
        <span class="font-semibold mt-1 text-gray-500"
          >{{ city.name }}, {{ city.country }}</span
        >
      </div>
      <div class="flex flex-col">
        <div class="flex">
          <svg
            class="h-8 w-8 fill-current w mb-5"
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
          <span class="ml-5"
            >{{ city.current_weather.temperature }}
            {{ city.current_weather_units.temperature }}</span
          >
        </div>
        <div class="flex">
          <svg
            class="h-8 w-8 fill-current w mb-5"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z"
            ></path>
          </svg>
          <span class="ml-5"
            >{{ city.current_weather.windspeed }}
            {{ city.current_weather_units.windspeed }}</span
          >
        </div>
        <div class="flex">
          <svg
            class="h-8 w-8 fill-current w"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M96 320c-53 0-96-43-96-96c0-42.5 27.6-78.6 65.9-91.2C64.7 126.1 64 119.1 64 112C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80c0 5.5-.6 10.8-1.6 16c.5 0 1.1 0 1.6 0c53 0 96 43 96 96s-43 96-96 96H96zM81.5 353.9c12.2 5.2 17.8 19.3 12.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6S-3.3 490.7 1.9 478.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6zm120 0c12.2 5.2 17.8 19.3 12.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6zm244.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6s17.8 19.3 12.6 31.5zM313.5 353.9c12.2 5.2 17.8 19.3 12.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6z"
            ></path>
          </svg>
          <span class="ml-5"
            >{{ city.current_weather.temperature }}
            {{ city.current_weather_units.temperature }}</span
          >
        </div>
      </div>
    </div>
  </div> -->
</template>
<script setup>
import { onMounted } from "vue";
import { useCityListStore } from "@/stores/cities";
import { storeToRefs } from "pinia";
import axios from "axios";
import { initFlowbite } from "flowbite";
import moment from "moment";
const store = useCityListStore();
const { cityList } = storeToRefs(store);
let props = defineProps({
    date: String,
});
onMounted(async () => {
  console.log("in mounted");
  initFlowbite();
  await getTempDetails();
});

async function getTempDetails() {
  const requests = cityList.value.map((city) => {
    //   const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current_weather=true`;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&timezone=GMT&current_weather=true&hourly=precipitation_probability&forecast_hours=1&daily=temperature_2m_min,temperature_2m_max,sunrise,sunset,rain_sum,precipitation_sum`;
    return axios.get(url);
  });
  const responses = await Promise.all(requests);
  responses.forEach((response, index) => {
    cityList.value[index].current_weather = response.data.current_weather;
    cityList.value[index].current_weather_units = response.data.current_weather_units;
    cityList.value[index].daily = response.data.daily;
    cityList.value[index].daily_units = response.data.daily_units;
    console.log("cityList----data", cityList.value, response.data);
  });
}
// async function getTempDetails() {
//     cityList.value.forEach(element => {
//         axios.get('https://api.open-meteo.com/v1/forecast?latitude=' + element.latitude + '&longitude=' + element.longitude + '&current_weather=true')
//             .then((response) => {
//                 element.temp_details = response.data
//                 console.log('response', response.data)
//             })
//     });
//     console.log('cityList----', cityList.value);
// }
</script>
