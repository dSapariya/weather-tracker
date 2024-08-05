
<template>
    <Setting></Setting>
     <!-- <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open sidebar</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
            </path>
        </svg>
    </button>  -->
   
<!-- <aside id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <a href="https://flowbite.com/" class="flex items-center ps-2.5 mb-5">
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Weather App</span>
            </a>
            <ul class="space-y-2 font-medium">
                <li>
                    <a href="/"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z"
                                clip-rule="evenodd" />
                        </svg>

                        <span class="ms-3">Weather</span>
                    </a>
                </li>
                <li>
                    <a href="/cities"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5" />
                        </svg>

                        <span class="flex-1 ms-3 whitespace-nowrap">Cities</span>
                        <span
                            class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                    </a>
                </li>
                <li>
                    <a href=""
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="2"
                                d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>

                        <span class="flex-1 ms-3 whitespace-nowrap">Setting</span>
                    </a>
                </li>
            </ul>
        </div>
    </aside> -->
    <div>
        <div v-if="cityList && cityList.length > 0">
        <div  v-for="(city, index) in cityList" class="p-4 mt-10 bg-cover h-screen flex items-center justify-center"
        :style="backgroundImageStyle">
        <div class="p-4 w-full max-w-5xl border-none rounded-lg bg-black bg-opacity-30">
            <div class="grid grid-rows-3 grid-flow-col gap-4 w-full weather-card">

                <div class="w-1/2">
                    <div class="row-span-3 w-full h-full flex flex-col items-start justify-start rounded bg-opacity-0"
                        style="background-color: rgba(0, 0, 0, 0.1);">
                        <div class="relative w-full">

                            <SearchList :isShow="true" />
                      
                        </div>
                        <div
                            class="text-white bg-transparent flex flex-col w-full justify-between items-center gap-5 mt-10 h-full">
                            <div class=" w-full h-1/3 text-center">
                                <h1 class="text-6xl font-medium">{{ city.current_weather.temperature }} {{
                                    city.current_weather_units.temperature }}</h1>
                                <span class="text-1xl capitalize">{{ city.weather_code }} Day</span>

                            </div>
                            <span class="text-2xl">{{ city.name }}</span>
                            <div class="h-2/2">
                                <div class=" flex gap-4 mt-4 w-full">
                                    <div class="flex flex-col w-full  rounded-lg bg-black bg-opacity-50 p-2"
                                        style="background-color: rgba(0, 0, 0, 0.5);">
                                        <div class="flex justify-start items-center gap-2">
                                            <div>
                                                <svg class="text-white w-6 h-6 text-gray-800 dark:text-white"
                                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                                    height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                        stroke-linejoin="round" stroke-width="2"
                                                        d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h1 class="text-1xl uppercase">feels like</h1>
                                            </div>
                                        </div>
                                        <span class="text-3xl">30</span>
                                        <p class="text-xs mt-5">Humidity is making feel warmer</p>
                                    </div>
                                    <div class="flex flex-col w-full  rounded-lg bg-black bg-opacity-50 p-2"
                                        style="background-color: rgba(0, 0, 0, 0.5);">
                                        <div class="flex justify-start items-center gap-2">
                                            <div>
                                                <svg class="text-white w-6 h-6 text-gray-800 dark:text-white"
                                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                                    height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                        stroke-linejoin="round" stroke-width="2"
                                                        d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h1 class="text-1xl uppercase">Precipitation</h1>
                                            </div>
                                        </div>
                                        <span class="text-3xl">{{
                                            city.daily_data[moment().format("YYYY-MM-DD")][
                                            "precipitation_probability_max"
                                            ]
                                        }} {{ city.daily_units.precipitation_probability_max }}</span>
                                        <p class="text-xs mt-5">Humidity is making feel warmer</p>
                                    </div>
                                </div>
                                <div class=" flex gap-4 mt-4 w-full">
                                    <div class="flex flex-col w-full  rounded-lg bg-black bg-opacity-50 p-2"
                                        style="background-color: rgba(0, 0, 0, 0.5);">
                                        <div class="flex justify-start items-center gap-2">
                                            <div>
                                                <svg class="text-white w-6 h-6 text-gray-800 dark:text-white"
                                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                                    height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                        stroke-linejoin="round" stroke-width="2"
                                                        d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h1 class="text-1xl uppercase">WindSpeed</h1>
                                            </div>
                                        </div>
                                        <span class="text-3xl">{{ city.current_weather.windspeed }}
                                            {{ city.current_weather_units.windspeed }}</span>
                                        <p class="text-xs mt-5">Humidity is making feel warmer</p>
                                    </div>
                                    <div class="flex flex-col w-full  rounded-lg bg-black bg-opacity-50 p-2"
                                        style="background-color: rgba(0, 0, 0, 0.5);">
                                        <div class="flex justify-start items-center gap-2">
                                            <div>
                                                <svg class="text-white w-6 h-6 text-gray-800 dark:text-white"
                                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                                    height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                        stroke-linejoin="round" stroke-width="2"
                                                        d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h1 class="text-1xl uppercase">Humidity</h1>
                                            </div>
                                        </div>
                                        <span class="text-3xl">30</span>
                                        <p class="text-xs mt-5">Humidity is making feel warmer</p>
                                    </div>
                                </div>
                            </div>




                        </div>

                    </div>
                </div>

                <div class="w-full">
                    <div class="col-span-2">
                        <div class="flex flex-col h-42 rounded text-white items-start p-2"
                            style="background-color: rgba(0, 0, 0, 0.3);">
                            <div class="flex">
                                <svg class="text-white w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                    viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M18.5 4h-13m13 16h-13M8 20v-3.333a2 2 0 0 1 .4-1.2L10 12.6a1 1 0 0 0 0-1.2L8.4 8.533a2 2 0 0 1-.4-1.2V4h8v3.333a2 2 0 0 1-.4 1.2L13.957 11.4a1 1 0 0 0 0 1.2l1.643 2.867a2 2 0 0 1 .4 1.2V20H8Z" />
                                </svg>

                                <h1 class="text-1xl uppercase">hourly forcast</h1>
                            </div>
                            <div class="flex flex-col w-full h-full">
                                <div class="grid grid-rows-1 grid-cols-1 gap-4 w-full h-full">
                                    <div class="row-span-3 w-full h-full flex flex-col items-start justify-start rounded bg-opacity-0"
                                        style="background-color: rgba(0, 0, 0, 0.1);">
                                        <div class="grid grid-rows-1 grid-flow-col gap-4 w-full">

                                            <div class="flex gap-5 overflow-x-auto scroll-smooth w-full card-scroll">
                                                <div class="flex flex-col w-full  rounded-lg bg-black bg-opacity-50 mt-2 p-5"
                                                    style="background-color: rgba(0, 0, 0, 0.8);">
                                                    <div class="flex justify-start items-center gap-2">

                                                        <div>
                                                            <h1 class="text-xs uppercase">now</h1>
                                                        </div>
                                                    </div>
                                                    <span class="text-2xl">30</span>
                                                    <div>
                                                        <svg class="text-white w-6 h-6 text-gray-800 dark:text-white"
                                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                            width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" stroke-linecap="round"
                                                                stroke-linejoin="round" stroke-width="2"
                                                                d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
                                                        </svg>
                                                    </div>

                                                </div>
                                                <div class="flex flex-col w-full  rounded-lg bg-black bg-opacity-50 mt-2 p-5"
                                                    style="background-color: rgba(0, 0, 0, 0.8);">
                                                    <div class="flex justify-start items-center gap-2">

                                                        <div>
                                                            <h1 class="text-xs uppercase">now</h1>
                                                        </div>
                                                    </div>
                                                    <span class="text-2xl">30</span>
                                                    <div>
                                                        <svg class="text-white w-6 h-6 text-gray-800 dark:text-white"
                                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                            width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" stroke-linecap="round"
                                                                stroke-linejoin="round" stroke-width="2"
                                                                d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
                                                        </svg>
                                                    </div>

                                                </div>
                                                <div class="flex flex-col w-full  rounded-lg bg-black bg-opacity-50 mt-2 p-5"
                                                    style="background-color: rgba(0, 0, 0, 0.8);">
                                                    <div class="flex justify-start items-center gap-2">

                                                        <div>
                                                            <h1 class="text-xs uppercase">now</h1>
                                                        </div>
                                                    </div>
                                                    <span class="text-2xl">30</span>
                                                    <div>
                                                        <svg class="text-white w-6 h-6 text-gray-800 dark:text-white"
                                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                            width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" stroke-linecap="round"
                                                                stroke-linejoin="round" stroke-width="2"
                                                                d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
                                                        </svg>
                                                    </div>

                                                </div>
                                                <div class="flex flex-col w-full  rounded-lg bg-black bg-opacity-50 mt-2 p-5"
                                                    style="background-color: rgba(0, 0, 0, 0.8);">
                                                    <div class="flex justify-start items-center gap-2">

                                                        <div>
                                                            <h1 class="text-xs uppercase">now</h1>
                                                        </div>
                                                    </div>
                                                    <span class="text-2xl">30</span>
                                                    <div>
                                                        <svg class="text-white w-6 h-6 text-gray-800 dark:text-white"
                                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                            width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" stroke-linecap="round"
                                                                stroke-linejoin="round" stroke-width="2"
                                                                d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
                                                        </svg>
                                                    </div>

                                                </div>
                                                <div class="flex flex-col w-full  rounded-lg bg-black bg-opacity-50 mt-2 p-5"
                                                    style="background-color: rgba(0, 0, 0, 0.8);">
                                                    <div class="flex justify-start items-center gap-2">

                                                        <div>
                                                            <h1 class="text-xs uppercase">now</h1>
                                                        </div>
                                                    </div>
                                                    <span class="text-2xl">30</span>
                                                    <div>
                                                        <svg class="text-white w-6 h-6 text-gray-800 dark:text-white"
                                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                            width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" stroke-linecap="round"
                                                                stroke-linejoin="round" stroke-width="2"
                                                                d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
                                                        </svg>
                                                    </div>

                                                </div>
                                                <div class="flex flex-col w-full  rounded-lg bg-black bg-opacity-50 mt-2 p-5"
                                                    style="background-color: rgba(0, 0, 0, 0.8);">
                                                    <div class="flex justify-start items-center gap-2">

                                                        <div>
                                                            <h1 class="text-xs uppercase">now</h1>
                                                        </div>
                                                    </div>
                                                    <span class="text-2xl">30</span>
                                                    <div>
                                                        <svg class="text-white w-6 h-6 text-gray-800 dark:text-white"
                                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                            width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" stroke-linecap="round"
                                                                stroke-linejoin="round" stroke-width="2"
                                                                d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
                                                        </svg>
                                                    </div>

                                                </div>
                                                <div class="flex flex-col w-full  rounded-lg bg-black bg-opacity-50 mt-2 p-5"
                                                    style="background-color: rgba(0, 0, 0, 0.8);">
                                                    <div class="flex justify-start items-center gap-2">

                                                        <div>
                                                            <h1 class="text-xs uppercase">now</h1>
                                                        </div>
                                                    </div>
                                                    <span class="text-2xl">30</span>
                                                    <div>
                                                        <svg class="text-white w-6 h-6 text-gray-800 dark:text-white"
                                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                            width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" stroke-linecap="round"
                                                                stroke-linejoin="round" stroke-width="2"
                                                                d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
                                                        </svg>
                                                    </div>

                                                </div>
                                                <div class="flex flex-col w-full  rounded-lg bg-black bg-opacity-50 mt-2 p-5"
                                                    style="background-color: rgba(0, 0, 0, 0.8);">
                                                    <div class="flex justify-start items-center gap-2">

                                                        <div>
                                                            <h1 class="text-xs uppercase">now</h1>
                                                        </div>
                                                    </div>
                                                    <span class="text-2xl">30</span>
                                                    <div>
                                                        <svg class="text-white w-6 h-6 text-gray-800 dark:text-white"
                                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                            width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" stroke-linecap="round"
                                                                stroke-linejoin="round" stroke-width="2"
                                                                d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
                                                        </svg>
                                                    </div>

                                                </div>
                                                <div class="flex flex-col w-full  rounded-lg bg-black bg-opacity-50 mt-2 p-5"
                                                    style="background-color: rgba(0, 0, 0, 0.8);">
                                                    <div class="flex justify-start items-center gap-2">

                                                        <div>
                                                            <h1 class="text-xs uppercase">now</h1>
                                                        </div>
                                                    </div>
                                                    <span class="text-2xl">30</span>
                                                    <div>
                                                        <svg class="text-white w-6 h-6 text-gray-800 dark:text-white"
                                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                            width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" stroke-linecap="round"
                                                                stroke-linejoin="round" stroke-width="2"
                                                                d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
                                                        </svg>
                                                    </div>

                                                </div>
                                                <div class="flex flex-col w-full  rounded-lg bg-black bg-opacity-50 mt-2 p-5"
                                                    style="background-color: rgba(0, 0, 0, 0.8);">
                                                    <div class="flex justify-start items-center gap-2">

                                                        <div>
                                                            <h1 class="text-xs uppercase">now</h1>
                                                        </div>
                                                    </div>
                                                    <span class="text-2xl">30</span>
                                                    <div>
                                                        <svg class="text-white w-6 h-6 text-gray-800 dark:text-white"
                                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                            width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" stroke-linecap="round"
                                                                stroke-linejoin="round" stroke-width="2"
                                                                d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
                                                        </svg>
                                                    </div>

                                                </div>
                                                <div class="flex flex-col w-full  rounded-lg bg-black bg-opacity-50 mt-2 p-5"
                                                    style="background-color: rgba(0, 0, 0, 0.8);">
                                                    <div class="flex justify-start items-center gap-2">

                                                        <div>
                                                            <h1 class="text-xs uppercase">now</h1>
                                                        </div>
                                                    </div>
                                                    <span class="text-2xl">30</span>
                                                    <div>
                                                        <svg class="text-white w-6 h-6 text-gray-800 dark:text-white"
                                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                            width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" stroke-linecap="round"
                                                                stroke-linejoin="round" stroke-width="2"
                                                                d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
                                                        </svg>
                                                    </div>

                                                </div>
                                                <div class="flex flex-col w-full  rounded-lg bg-black bg-opacity-50 mt-2 p-5"
                                                    style="background-color: rgba(0, 0, 0, 0.8);">
                                                    <div class="flex justify-start items-center gap-2">

                                                        <div>
                                                            <h1 class="text-xs uppercase">now</h1>
                                                        </div>
                                                    </div>
                                                    <span class="text-2xl">30</span>
                                                    <div>
                                                        <svg class="text-white w-6 h-6 text-gray-800 dark:text-white"
                                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                            width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" stroke-linecap="round"
                                                                stroke-linejoin="round" stroke-width="2"
                                                                d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
                                                        </svg>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-span-2 mt-5">
                        <div class="flex flex-col h-42 rounded text-white items-start p-2"
                            style="background-color: rgba(0, 0, 0, 0.3);">
                            <div class="flex ">
                                <svg class="w-6 h-6 text-gray-800 text-white me-1" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                    viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
                                </svg>


                                <h1 class="text-1xl uppercase">Weekly forecast</h1>
                            </div>
                            <div class="flex flex-col w-full h-full">
                                <div class="grid grid-rows-1 grid-cols-1 gap-4 w-full h-full">
                                    <div class="row-span-3 w-full h-full flex flex-col items-start justify-start rounded bg-opacity-0"
                                        style="background-color: rgba(0, 0, 0, 0.1);">
                                        <div class="grid grid-rows-1 grid-flow-col gap-4 w-full">

                                            <div class="flex gap-5 overflow-x-auto w-full card-scroll">
                                                <div v-for="(week, weekIndex) in city.daily_data" :key="weekIndex"
                                                    class="flex flex-col w-full items-center text-center  rounded-lg bg-black bg-opacity-50 mt-2 p-5"
                                                    style="background-color: rgba(0, 0, 0, 0.8);">
                                                    <div class="flex justify-start items-center gap-2">

                                                        <div>
                                                            <h1 class="text-xs uppercase">now</h1>
                                                            <span>{{ moment(week.time).format("DD") }}/{{
                                                                moment(week.time).format("MM")
                                                                }}</span>
                                                        </div>
                                                    </div>
                                                    <span class="text-xs">{{ week.temperature_2m_max }}
                                                        {{ city.daily_units.temperature_2m_max }}</span>

                                                    <span class="text-xs">{{ week.rain_sum }} {{
                                                        city.daily_units.rain_sum }}</span>
                                                    <div>
                                                        <svg v-if="week.weather_code == 'Rainy'"
                                                            class="text-white w-6 h-6 text-gray-800 dark:text-white"
                                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                            width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" stroke-linecap="round"
                                                                stroke-linejoin="round" stroke-width="2"
                                                                d="M3 12a5 5 0 0 1 9.9-1M15 12h-3m6-4.5A4.5 4.5 0 0 0 16.5 3a4.5 4.5 0 0 0-9 0 4.5 4.5 0 0 0-1.5 8.5M5 16l1.5 3M8 19l1.5-3m3 3l1.5-3m-4 0l1.5 3M20 16l-1.5 3m-3 0l1.5-3m-3 0l1.5 3m3 0l1.5-3" />
                                                        </svg>

                                                        <svg v-if="week.weather_code == 'Sunny'"
                                                            class="text-white w-6 h-6 text-gray-800 dark:text-white"
                                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                            width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" stroke-linecap="round"
                                                                stroke-linejoin="round" stroke-width="2"
                                                                d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
                                                        </svg>
                                                        <svg v-if="week.weather_code == 'Cloudy'"
                                                            class="text-white w-6 h-6 text-gray-800 dark:text-white"
                                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                            width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" stroke-linecap="round"
                                                                stroke-linejoin="round" stroke-width="2"
                                                                d="M7 16a5 5 0 0 1 10 0h-5.5m5.5 0a4.5 4.5 0 1 0-8.182-2.82A3.5 3.5 0 1 0 4.5 16h1.5m1.5-3a3 3 0 0 0-1.5.39M15 16a4 4 0 1 1 4-4 3.998 3.998 0 0 1-4 4z" />
                                                        </svg>

                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <div class="h-2/2">
                            <div class=" flex gap-4 mt-4 w-full text-white">
                                <div class="flex flex-col w-full  rounded-lg bg-black bg-opacity-50 p-2"
                                    style="background-color: rgba(0, 0, 0, 0.5);">
                                    <div class="flex justify-start items-center gap-2">
                                        <div>
                                            <svg class="text-white w-6 h-6 text-gray-800 dark:text-white"
                                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="2"
                                                    d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h1 class="text-1xl uppercase">windspeed</h1>
                                        </div>
                                    </div>
                                    <span class="text-3xl">{{ city.current_weather.windspeed }}
                                        {{ city.current_weather_units.windspeed }}</span>
                                    <p class="text-xs mt-5">Humidity is making feel warmer</p>
                                </div>
                                <div class="flex flex-col w-full  rounded-lg bg-black bg-opacity-50 p-2"
                                    style="background-color: rgba(0, 0, 0, 0.5);">
                                    <div class="flex justify-start items-center gap-2">
                                        <div>
                                            <svg class="text-white w-6 h-6 text-gray-800 dark:text-white"
                                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="2"
                                                    d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h1 class="text-1xl uppercase">UV Index</h1>
                                        </div>
                                    </div>
                                    <span class="text-3xl">30</span>
                                    <p class="text-xs mt-5">Humidity is making feel warmer</p>
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
    
  
</template>
<script setup>
import { ref, computed, onMounted, getCurrentInstance } from 'vue';
import imagePath from '@/assets/images/rainy.jpg';
import { useCityListStore } from "@/stores/cities";
import SearchList from "../components/SearchList.vue";
import Setting from "../components/UnitSetting.vue";
import { storeToRefs } from "pinia";
import moment from "moment";
const store = useCityListStore();
const {  cityList ,isMetric} = storeToRefs(store);
const isLoading = ref(true);
const backgroundImageStyle = computed(() => ({
    backgroundImage: `url(${imagePath})`,
}));
onMounted(async () => {    
    await getDefaultData();
});

async function getDefaultData() {
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
</script>

<style scoped>
.weather-card {
    display: flex !important;
}
.card-scroll {
    scrollbar-width: none;
}
</style>