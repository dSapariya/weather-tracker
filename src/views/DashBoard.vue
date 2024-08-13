<template>

        <div v-if="cityList && cityList.length > 0">
            <div>
        <!-- <Setting></Setting> -->
        <div class="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 hidden loader-overlay">
            <div class="w-12 h-12 border-4 border-solid border-gray-300 rounded-full spinner"></div>
        </div>
            <div v-for="(city, index) in cityList"
                class="p-4 bg-cover h-auto md:h-screen flex items-center justify-center"
                :style="{ 'background-image': city.bg_image }">
                <div class="p-4 w-full max-w-5xl border-none rounded-xl bg-black bg-opacity-30 mt-10">

                    <div
                        class="grid grid-rows-2 grid-flow-col gap-4 w-full sm:flex sm:flex-col sm:items-center sm:h-[100vh] sm:overflow-y-scroll sm:scroll-smooth md:flex-row md:h-auto md:overflow-auto">

                        <div class="w-full sm:w-1/2">
                            <div
                                class="row-span-3 w-full h-full flex flex-col items-start justify-start rounded-xl bg-opacity-0">
                                <div class="relative w-full">

                                    <SearchList :isShow="true" @isLoading="getLoadingStatus"/>

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
                                            <div class="flex flex-col w-full  rounded-xl bg-black bg-opacity-50 p-4"
                                                style="background-color: rgba(0, 0, 0, 0.6);border-bottom:1px solid white;;">
                                                <div class="flex justify-start items-center gap-2">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 32 32">
                                                            <path fill="currentColor"
                                                                d="M26 30h-4a2.006 2.006 0 0 1-2-2v-7a2.006 2.006 0 0 1-2-2v-6a2.947 2.947 0 0 1 3-3h6a2.947 2.947 0 0 1 3 3v6a2.006 2.006 0 0 1-2 2v7a2.006 2.006 0 0 1-2 2m-5-18a.945.945 0 0 0-1 1v6h2v9h4v-9h2v-6a.945.945 0 0 0-1-1zm3-3a4 4 0 1 1 4-4a4.01 4.01 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2.006 2.006 0 0 0-2-2M10 20.184V12H8v8.184a3 3 0 1 0 2 0" />
                                                            <path fill="currentColor"
                                                                d="M9 30a6.993 6.993 0 0 1-5-11.89V7a5 5 0 0 1 10 0v11.11A6.993 6.993 0 0 1 9 30M9 4a3.003 3.003 0 0 0-3 3v11.983l-.332.299a5 5 0 1 0 6.664 0L12 18.983V7a3.003 3.003 0 0 0-3-3" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h1 class="text-1xl uppercase">feels like</h1>
                                                    </div>
                                                </div>
                                                <span class="text-3xl">30</span>
                                                <p class="text-xs mt-5">Humidity is making feel warmer</p>
                                            </div>
                                            <div class="flex flex-col w-full  rounded-xl bg-black bg-opacity-50 p-2"
                                                style="background-color: rgba(0, 0, 0, 0.6);border-bottom:1px solid white;;">
                                                <div class="flex justify-start items-center gap-2">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 2048 2048">
                                                            <path fill="currentColor"
                                                                d="M1607 1166q28 57 42 118t15 124q0 88-23 170t-64 153t-100 129t-130 100t-153 65t-170 23t-170-23t-153-64t-129-100t-100-130t-65-153t-23-170q0-63 14-124t43-118L1024 0zm-583 754q106 0 199-40t163-109t110-163t40-200q0-48-11-95t-33-90l-468-937l-468 937q-22 43-33 90t-11 95q0 106 40 199t109 163t163 110t200 40" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h1 class="text-1xl uppercase">Precipitation</h1>
                                                    </div>
                                                </div>
                                                <span class="text-3xl" v-if="city.daily_data">{{
                                                    city.daily_data[moment().format("YYYY-MM-DD")][
                                                    "precipitation_probability_max"
                                                    ]
                                                }}{{ city.daily_units.precipitation_probability_max }}</span>
                                                <p class="text-xs mt-5">{{
                                                    city.daily_data[moment().format("YYYY-MM-DD")][
                                                    "precipitation_probability_max"
                                                    ]
                                                }}{{ city.daily_units.precipitation_probability_max }} expected in
                                                    last 24 hours.</p>
                                            </div>
                                        </div>
                                        <div class=" flex gap-4 mt-4 w-full">
                                            <div class="flex flex-col w-full  rounded-xl bg-black bg-opacity-50 p-2"
                                                style="background-color: rgba(0, 0, 0, 0.6);border-bottom:1px solid white;; ">
                                                <div class="flex justify-start items-center gap-2">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24">
                                                            <path fill="currentColor"
                                                                d="M12.005 15.154q1.524 0 2.586-1.067t1.063-2.591t-1.067-2.587t-2.591-1.063t-2.587 1.067t-1.063 2.592t1.067 2.586t2.592 1.063M12 14.2q-1.125 0-1.912-.787T9.3 11.5t.788-1.912T12 8.8t1.913.788t.787 1.912t-.787 1.913T12 14.2m.003 3.8q-3.25 0-5.922-1.768T2.077 11.5q1.33-2.964 4.001-4.732T11.998 5t5.921 1.768t4.004 4.732q-1.33 2.964-4.001 4.732T12.002 18M12 17q2.825 0 5.188-1.487T20.8 11.5q-1.25-2.525-3.613-4.012T12 6T6.813 7.488T3.2 11.5q1.25 2.525 3.613 4.013T12 17" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h1 class="text-1xl uppercase">visibility</h1>
                                                    </div>
                                                </div>
                                                <span class="text-3xl">{{ city.hourly_data &&
                                                    city.hourly_data.visibility && city.hourly_data.visibility[0] }}
                                                    {{ city.hourly_units && city.hourly_units.visibility &&
                                                        city.hourly_units.visibility }}</span>
                                                <p class="text-xs mt-5">Perfectly clear view</p>
                                            </div>
                                            <div class="flex flex-col w-full  rounded-xl bg-black bg-opacity-50 p-2"
                                                style="background-color: rgba(0, 0, 0, 0.6); border-bottom:1px solid white;;">
                                                <div class="flex justify-start items-center gap-2">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 30 30">
                                                            <path fill="currentColor"
                                                                d="M7.56 17.19q0-1.32.72-3.03c.72-1.71 1.1-2.25 1.86-3.31c1.56-2.06 2.92-3.62 4.06-4.67l.75-.72c.25.26.53.5.83.72c.41.42 1.04 1.11 1.88 2.09s1.57 1.85 2.17 2.65c.71 1.01 1.32 2.1 1.81 3.25s.74 2.16.74 3.03c0 1-.19 1.95-.58 2.86s-.91 1.7-1.57 2.36s-1.45 1.19-2.37 1.58s-1.89.59-2.91.59c-1 0-1.95-.19-2.86-.57s-1.7-.89-2.36-1.55c-.66-.65-1.19-1.44-1.58-2.35s-.59-1.89-.59-2.93m2.26-2.93c0 .83.17 1.49.52 1.99c.35.49.88.74 1.59.74c.72 0 1.25-.25 1.61-.74c.35-.49.53-1.15.54-1.99c-.01-.84-.19-1.5-.54-2c-.35-.49-.89-.74-1.61-.74c-.71 0-1.24.25-1.59.74c-.35.5-.52 1.16-.52 2m1.57 0v-.35c0-.08.01-.19.02-.33s.02-.25.05-.32s.05-.16.09-.24s.09-.15.15-.18c.07-.04.14-.06.23-.06q.21 0 .33.12c.12.12.14.21.17.38c.03.18.05.32.06.45s.01.3.01.52c0 .23 0 .4-.01.52q-.015.18-.06.45c-.03.17-.09.3-.17.38s-.19.12-.33.12c-.09 0-.16-.02-.23-.06a.34.34 0 0 1-.15-.18c-.04-.08-.07-.17-.09-.24c-.02-.08-.04-.19-.05-.32c-.01-.14-.02-.25-.02-.32zm.59 7.75h1.32l4.99-10.74h-1.35zm4.3-2.99c.01.84.2 1.5.55 2c.35.49.89.74 1.6.74c.72 0 1.25-.25 1.6-.74s.52-1.16.53-2c-.01-.84-.18-1.5-.53-1.99s-.88-.74-1.6-.74c-.71 0-1.25.25-1.6.74c-.36.49-.54 1.15-.55 1.99m1.57 0c0-.23 0-.4.01-.52q.015-.18.06-.45c.045-.27.09-.3.17-.38s.19-.12.33-.12q.135 0 .24.06c.07.04.12.1.16.19s.07.17.1.24s.04.18.05.32l.01.32v.69l-.01.32l-.05.32l-.1.24l-.16.19l-.24.06q-.21 0-.33-.12c-.12-.12-.14-.21-.17-.38q-.045-.27-.06-.45c-.015-.18-.01-.3-.01-.53" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h1 class="text-1xl uppercase">Humidity</h1>
                                                    </div>
                                                </div>
                                                <span class="text-3xl">{{ city.hourly_data &&
                                                    city.hourly_data.relative_humidity_2m &&
                                                    city.hourly_data.relative_humidity_2m[0] }}
                                                    {{ city.hourly_units && city.hourly_units.relative_humidity_2m &&
                                                        city.hourly_units.relative_humidity_2m }}</span>
                                                <p class="text-xs mt-5">The dew point is {{ city.hourly_data &&
                                                    city.hourly_data.dew_point_2m && city.hourly_data.dew_point_2m[0] }}
                                                    {{ city.hourly_units && city.hourly_units.dew_point_2m &&
                                                        city.hourly_units.dew_point_2m }} right now</p>
                                            </div>
                                        </div>
                                    </div>




                                </div>

                            </div>
                        </div>

                        <div class="w-full sm:w-full">
                            <div class="col-span-2">
                                <div class="flex flex-col h-42 rounded-xl text-white items-start p-2"
                                    style="background-color: rgba(0, 0, 0, 0.6); border-bottom:1px solid white;;">
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
                                            <div
                                                class="row-span-3 w-full h-full flex flex-col items-start justify-start rounded-xl bg-opacity-0">
                                                <div class="grid grid-rows-1 grid-flow-col gap-4 w-full">
                                                    <div
                                                        class="flex gap-5 overflow-x-auto scroll-smooth w-full card-scroll">
                                                        <div v-for="(hours, hoursIndex) in city.per_hour_data"
                                                            class="flex flex-col w-full justify-start items-center">
                                                            <div class="hover:bg-gray-700 rounded-xl px-4 py-2 mt-2"
                                                                style="width: max-content;">
                                                                <div class="flex justify-start items-center gap-2 ">

                                                                    <div>
                                                                        <h1 class="text-xs uppercase">{{ hours.time }}
                                                                        </h1>
                                                                    </div>
                                                                </div>
                                                                <span class="text-2xl">{{ hours.temperature_2m }}</span>
                                                                <div>

                                                                    <!-- <svg v-if="hours.weather_code == 'Rainy'"
                                                                        xmlns="http://www.w3.org/2000/svg" width="24"
                                                                        height="24" viewBox="0 0 24 24">
                                                                        <path fill="currentColor"
                                                                            d="M13.95 21.9q-.375.2-.762.063t-.588-.513l-1.5-3q-.2-.375-.062-.762t.512-.588t.763-.062t.587.512l1.5 3q.2.375.063.763t-.513.587m6 0q-.375.2-.762.063t-.588-.513l-1.5-3q-.2-.375-.062-.762t.512-.588t.763-.062t.587.512l1.5 3q.2.375.063.763t-.513.587m-12 0q-.375.2-.762.063T6.6 21.45l-1.5-3q-.2-.375-.062-.762t.512-.588t.763-.062t.587.512l1.5 3q.2.375.063.763t-.513.587M7.5 16q-2.275 0-3.887-1.612T2 10.5q0-2.075 1.375-3.625t3.4-1.825q.8-1.425 2.188-2.238T12 2q2.25 0 3.913 1.438t2.012 3.587q1.725.15 2.9 1.425T22 11.5q0 1.875-1.312 3.188T17.5 16z" />
                                                                    </svg>
                                                                    <svg v-if="hours.weather_code == 'Sunny'"
                                                                        xmlns="http://www.w3.org/2000/svg" width="24"
                                                                        height="24" viewBox="0 0 512 512">
                                                                        <path fill="currentColor"
                                                                            d="M340 480H106c-29.5 0-54.92-7.83-73.53-22.64C11.23 440.44 0 415.35 0 384.8c0-26.66 10.08-49.8 29.14-66.91c15.24-13.68 36.17-23.21 59-26.84c.06 0 .08 0 .09-.05c6.44-39 23.83-72.09 50.31-95.68A140.24 140.24 0 0 1 232 160c30.23 0 58.48 9.39 81.71 27.17a142.7 142.7 0 0 1 45.36 60.66c29.41 4.82 54.72 17.11 73.19 35.54C453 304.11 464 331.71 464 363.2c0 32.85-13.13 62.87-37 84.52c-22.89 20.82-53.8 32.28-87 32.28m41.5-260.11a169.2 169.2 0 0 1 45.44 19A96 96 0 0 0 281 129.33q-2.85 2-5.54 4.2a162.5 162.5 0 0 1 57.73 28.23a174.5 174.5 0 0 1 48.31 58.13M448 192h64v32h-64zM320 32h32v64h-32zm-64.65 97.63l12.45-12.45l-44.62-44.63l-22.63 22.63l33.17 33.17h.6a172 172 0 0 1 21.03 1.28m148.853-12.46l44.626-44.625l22.627 22.627l-44.625 44.626z" />
                                                                    </svg>
                                                                    <svg v-if="hours.weather_code == 'Cloudy'"
                                                                        xmlns="http://www.w3.org/2000/svg" width="24"
                                                                        height="24" viewBox="0 0 24 24">
                                                                        <g fill="none">
                                                                            <path
                                                                                d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                                                            <path fill="currentColor"
                                                                                d="M11 6a6 6 0 0 1 5.703 4.132a5.502 5.502 0 0 1-.982 10.864L15.5 21h-9a4.5 4.5 0 0 1-1.495-8.746A6 6 0 0 1 11 6m5-3a6 6 0 0 1 5.09 9.18a6.52 6.52 0 0 0-3.63-2.88a7 7 0 0 0-5.949-4.282A6 6 0 0 1 16.002 3Z" />
                                                                        </g>
                                                                    </svg> -->
                                                                    <svg v-if="hours.weather_code == 'Sunny' || hours.weather_code == 'Mostly Sunny'"
                                                                        xmlns="http://www.w3.org/2000/svg" width="24"
                                                                        height="24" viewBox="0 0 24 24">
                                                                        <path fill="#f5cf0f"
                                                                            d="M11 5V1h2v4zm6.65 2.75l-1.375-1.375l2.8-2.875l1.4 1.425zM19 13v-2h4v2zm-8 10v-4h2v4zM6.35 7.7L3.5 4.925l1.425-1.4L7.75 6.35zm12.7 12.8l-2.775-2.875l1.35-1.35l2.85 2.75zM1 13v-2h4v2zm3.925 7.5l-1.4-1.425l2.8-2.8l.725.675l.725.7zM12 18q-2.5 0-4.25-1.75T6 12t1.75-4.25T12 6t4.25 1.75T18 12t-1.75 4.25T12 18m0-2q1.65 0 2.825-1.175T16 12t-1.175-2.825T12 8T9.175 9.175T8 12t1.175 2.825T12 16m0-4" />
                                                                    </svg>
                                                                    <svg v-if="hours.weather_code == 'Partly Cloudy' || hours.weather_code == 'Cloudy' || hours.weather_code == 'Mostly Cloudy'"
                                                                        xmlns="http://www.w3.org/2000/svg" width="24"
                                                                        height="24" viewBox="0 0 512 512">
                                                                        <defs>
                                                                            <symbol id="meteoconsPartlyCloudyDayFill0"
                                                                                viewBox="0 0 196 196">
                                                                                <circle cx="98" cy="98" r="40"
                                                                                    fill="url(#meteoconsPartlyCloudyDayFill4)"
                                                                                    stroke="#f8af18"
                                                                                    stroke-miterlimit="10"
                                                                                    stroke-width="4" />
                                                                                <path fill="none" stroke="#fbbf24"
                                                                                    stroke-linecap="round"
                                                                                    stroke-miterlimit="10"
                                                                                    stroke-width="12"
                                                                                    d="M98 31.4V6m0 184v-25.4M145.1 51l18-17.9M33 163l18-17.9M51 51L33 33m130.1 130.1l-18-18M6 98h25.4M190 98h-25.4">
                                                                                    <animateTransform additive="sum"
                                                                                        attributeName="transform"
                                                                                        dur="6s"
                                                                                        repeatCount="indefinite"
                                                                                        type="rotate"
                                                                                        values="0 98 98; 45 98 98" />
                                                                                </path>
                                                                            </symbol>
                                                                            <symbol id="meteoconsPartlyCloudyDayFill1"
                                                                                viewBox="0 0 350 222">
                                                                                <path
                                                                                    fill="url(#meteoconsPartlyCloudyDayFill3)"
                                                                                    stroke="#e6effc"
                                                                                    stroke-miterlimit="10"
                                                                                    stroke-width="6"
                                                                                    d="m291 107l-2.5.1A83.9 83.9 0 0 0 135.6 43A56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z" />
                                                                            </symbol>
                                                                            <symbol id="meteoconsPartlyCloudyDayFill2"
                                                                                viewBox="0 0 363 258">
                                                                                <use width="196" height="196"
                                                                                    href="#meteoconsPartlyCloudyDayFill0" />
                                                                                <use width="350" height="222"
                                                                                    href="#meteoconsPartlyCloudyDayFill1"
                                                                                    transform="translate(13 36)" />
                                                                            </symbol>
                                                                            <linearGradient
                                                                                id="meteoconsPartlyCloudyDayFill3"
                                                                                x1="99.5" x2="232.6" y1="30.7"
                                                                                y2="261.4"
                                                                                gradientUnits="userSpaceOnUse">
                                                                                <stop offset="0" stop-color="#f3f7fe" />
                                                                                <stop offset=".5"
                                                                                    stop-color="#f3f7fe" />
                                                                                <stop offset="1" stop-color="#deeafb" />
                                                                            </linearGradient>
                                                                            <linearGradient
                                                                                id="meteoconsPartlyCloudyDayFill4"
                                                                                x1="78" x2="118" y1="63.4" y2="132.7"
                                                                                gradientUnits="userSpaceOnUse">
                                                                                <stop offset="0" stop-color="#fbbf24" />
                                                                                <stop offset=".5"
                                                                                    stop-color="#fbbf24" />
                                                                                <stop offset="1" stop-color="#f59e0b" />
                                                                            </linearGradient>
                                                                        </defs>
                                                                        <use width="363" height="258"
                                                                            href="#meteoconsPartlyCloudyDayFill2"
                                                                            transform="translate(68 109)" />
                                                                    </svg>
                                                                    <svg v-if="hours.weather_code == 'Light Rain'"
                                                                        xmlns="http://www.w3.org/2000/svg" width="24"
                                                                        height="24" viewBox="0 0 24 24">
                                                                        <g fill="none">
                                                                            <path fill="#fafafa"
                                                                                d="M12 12.5H6v1h6zm6 0h-6v1h6zm2.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1a3.5 3.5 0 0 0 3.5-3.5zM18 7.5a2.5 2.5 0 0 1 2.5 2.5h1A3.5 3.5 0 0 0 18 6.5zm-.98-1.75A5.5 5.5 0 0 0 12 2.5v1a4.5 4.5 0 0 1 4.108 2.66zM12 2.5a5.5 5.5 0 0 0-5.02 3.25l.912.41A4.5 4.5 0 0 1 12 3.5zm-6 4A3.5 3.5 0 0 0 2.5 10h1A2.5 2.5 0 0 1 6 7.5zM2.5 10A3.5 3.5 0 0 0 6 13.5v-1A2.5 2.5 0 0 1 3.5 10zm4.48-4.25c-.209.464-.595.75-.98.75v1c.895 0 1.577-.637 1.892-1.34zM18 6.5c-.385 0-.771-.286-.98-.75l-.912.41c.316.703.997 1.34 1.892 1.34z" />
                                                                            <path stroke="#fafafa"
                                                                                stroke-linecap="round"
                                                                                d="M12 19v-2m5 3v-3M7 21v-4" />
                                                                        </g>
                                                                    </svg>

                                                                    <svg v-if="hours.weather_code == 'Heavy Rain'"
                                                                        xmlns="http://www.w3.org/2000/svg" width="24"
                                                                        height="24" viewBox="0 0 24 24">
                                                                        <g fill="none">
                                                                            <path
                                                                                d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                                                                            <path fill="#fafafa"
                                                                                d="M9.889 19.656a1 1 0 0 1 1.932.518l-.259.966a1 1 0 0 1-1.932-.518zm-2.195-1.862a1 1 0 0 1 .707 1.224l-.259.966a1 1 0 1 1-1.932-.517l.259-.966a1 1 0 0 1 1.225-.707m7.333 0a1 1 0 0 1 .707 1.224l-.258.966a1 1 0 1 1-1.932-.517l.258-.966a1 1 0 0 1 1.225-.707m-2.878-2.709a1 1 0 0 1 .707 1.225l-.259.966a1 1 0 1 1-1.932-.518l.26-.966a1 1 0 0 1 1.224-.707M11.5 2a6.5 6.5 0 0 1 6.086 4.212a6.002 6.002 0 0 1 .344 11.471a3 3 0 0 0 .512-1.045l.26-.966a3 3 0 0 0-5.478-2.309a3 3 0 0 0-2.277-.16a3 3 0 0 0-5.375.917l-.259.965a3 3 0 0 0 0 1.553a3 3 0 0 0-.581.819A5 5 0 0 1 5 8.417A6.5 6.5 0 0 1 11.5 2M8.729 13.93a1 1 0 0 1 .707 1.225l-.259.966a1 1 0 1 1-1.932-.518l.26-.966a1 1 0 0 1 1.224-.707m7.334 0a1 1 0 0 1 .707 1.225l-.26.966a1 1 0 1 1-1.931-.518l.259-.966a1 1 0 0 1 1.225-.707" />
                                                                        </g>
                                                                    </svg>
                                                                    <svg v-if="hours.weather_code == 'Thunderstorms'"
                                                                        xmlns="http://www.w3.org/2000/svg" width="24"
                                                                        height="24" viewBox="0 0 512 512">
                                                                        <defs>
                                                                            <linearGradient
                                                                                id="meteoconsThunderstormsFill0"
                                                                                x1="99.5" x2="232.6" y1="30.7"
                                                                                y2="261.4"
                                                                                gradientUnits="userSpaceOnUse">
                                                                                <stop offset="0" stop-color="#f3f7fe" />
                                                                                <stop offset=".5"
                                                                                    stop-color="#f3f7fe" />
                                                                                <stop offset="1" stop-color="#deeafb" />
                                                                            </linearGradient>
                                                                            <linearGradient
                                                                                id="meteoconsThunderstormsFill1"
                                                                                x1="8.7" x2="80.9" y1="17.1" y2="142.1"
                                                                                gradientUnits="userSpaceOnUse">
                                                                                <stop offset="0" stop-color="#f7b23b" />
                                                                                <stop offset=".5"
                                                                                    stop-color="#f7b23b" />
                                                                                <stop offset="1" stop-color="#f59e0b" />
                                                                            </linearGradient>
                                                                            <symbol id="meteoconsThunderstormsFill2"
                                                                                viewBox="0 0 350 222">
                                                                                <path
                                                                                    fill="url(#meteoconsThunderstormsFill0)"
                                                                                    stroke="#e6effc"
                                                                                    stroke-miterlimit="10"
                                                                                    stroke-width="6"
                                                                                    d="m291 107l-2.5.1A83.9 83.9 0 0 0 135.6 43A56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z" />
                                                                            </symbol>
                                                                            <symbol id="meteoconsThunderstormsFill3"
                                                                                viewBox="0 0 102.7 186.8">
                                                                                <path
                                                                                    fill="url(#meteoconsThunderstormsFill1)"
                                                                                    stroke="#f6a823"
                                                                                    stroke-miterlimit="10"
                                                                                    stroke-width="4"
                                                                                    d="m34.8 2l-32 96h32l-16 80l80-112h-48l32-64h-48z">
                                                                                    <animate
                                                                                        id="meteoconsThunderstormsFill4"
                                                                                        attributeName="opacity"
                                                                                        begin="0s; x1.end+.67s"
                                                                                        dur="1.33s"
                                                                                        keyTimes="0; .38; .5; .63; .75; .86; .94; 1"
                                                                                        values="1; 1; 0; 1; 0; 1; 0; 1" />
                                                                                </path>
                                                                            </symbol>
                                                                        </defs>
                                                                        <use width="350" height="222"
                                                                            href="#meteoconsThunderstormsFill2"
                                                                            transform="translate(81 145)" />
                                                                        <use width="102.7" height="186.7"
                                                                            href="#meteoconsThunderstormsFill3"
                                                                            transform="translate(205.23 291)" />
                                                                    </svg>
                                                                    <svg v-if="hours.weather_code == 'Snowy'"
                                                                        xmlns="http://www.w3.org/2000/svg" width="24"
                                                                        height="24" viewBox="0 0 24 24">
                                                                        <path fill="currentColor"
                                                                            d="M6 14a1 1 0 0 1 1 1a1 1 0 0 1-1 1a5 5 0 0 1-5-5a5 5 0 0 1 5-5c1-2.35 3.3-4 6-4c3.43 0 6.24 2.66 6.5 6.03L19 8a4 4 0 0 1 4 4a4 4 0 0 1-4 4h-1a1 1 0 0 1-1-1a1 1 0 0 1 1-1h1a2 2 0 0 0 2-2a2 2 0 0 0-2-2h-2V9a5 5 0 0 0-5-5C9.5 4 7.45 5.82 7.06 8.19C6.73 8.07 6.37 8 6 8a3 3 0 0 0-3 3a3 3 0 0 0 3 3m1.88 4.07l2.19-.57l-1.61-1.62c-.39-.38-.39-1.02 0-1.42c.39-.39 1.04-.39 1.42 0l1.62 1.61l.57-2.19a1 1 0 1 1 1.93.52l-.59 2.19L15.6 16a1 1 0 1 1 .52 1.93l-2.19.57l1.61 1.62c.39.38.39 1.03 0 1.42s-1.04.39-1.42 0l-1.62-1.61l-.57 2.19A1 1 0 1 1 10 21.6l.59-2.19L8.4 20a1 1 0 1 1-.52-1.93" />
                                                                    </svg>

                                                                    <svg v-if="hours.weather_code == 'Rainy' || hours.weather_code == 'Moderate Rain'"
                                                                        xmlns="http://www.w3.org/2000/svg" width="24"
                                                                        height="24" viewBox="0 0 512 512">
                                                                        <path fill="currentColor"
                                                                            d="M456.26 139.37c-16.77-16.73-39.17-28.41-65.17-34a16 16 0 0 1-11.19-9a142.24 142.24 0 0 0-42.19-53.21C314.48 25.39 286.23 16 256 16a140.24 140.24 0 0 0-93.5 35.32c-24.2 21.56-40.91 51.34-48.43 85.83a16.05 16.05 0 0 1-11.72 12.18c-25 6.3-35.71 12.54-49.21 24.56C34 190.93 24 214.14 24 240.8c0 30.55 11.23 55.64 32.47 72.56C75.08 328.17 100.5 336 130 336h234c33.2 0 64.11-11.46 87-32.28c23.84-21.65 37-51.67 37-84.52c0-31.49-11-59.09-31.74-79.83M112 448a16 16 0 0 1-13.3-24.88l32-48a16 16 0 0 1 26.62 17.76l-32 48A16 16 0 0 1 112 448m48 48a16 16 0 0 1-13.29-24.88l64-96a16 16 0 0 1 26.62 17.76l-64 96A16 16 0 0 1 160 496m112-48a16 16 0 0 1-13.3-24.88l32-48a16 16 0 0 1 26.62 17.76l-32 48A16 16 0 0 1 272 448m48 48a16 16 0 0 1-13.3-24.88l64-96a16 16 0 0 1 26.62 17.76l-64 96A16 16 0 0 1 320 496" />
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
                            </div>

                            <div class="col-span-2 mt-5">
                                <div class="flex flex-col h-42 rounded-xl text-white items-start p-2"
                                    style="background-color: rgba(0, 0, 0, 0.6);border-bottom:1px solid white;">
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
                                            <div
                                                class="row-span-3 w-full h-full flex flex-col items-start justify-start rounded-xl bg-opacity-0">
                                                <div class="grid grid-rows-1 grid-flow-col gap-4 w-full">

                                                    <div
                                                        class="flex gap-5 overflow-x-auto scroll-smooth w-full card-scroll">
                                                        <div v-for="(week, weekIndex) in city.daily_data"
                                                            :key="weekIndex"
                                                            class="flex flex-col w-full justify-start items-center">

                                                            <div class="hover:bg-gray-700 rounded-xl px-4 py-2 mt-2"
                                                                style="width: max-content;">
                                                                <div class="flex justify-start items-center gap-2">

                                                                    <div>
                                                                        <h1 class="text-xs uppercase">{{
                                                                            moment(week.time).format("ddd") }}</h1>
                                                                        <span class="text-xs">{{
                                                                            moment(week.time).format("DD") }}/{{
                                                                                moment(week.time).format("MM")
                                                                            }}</span>
                                                                    </div>
                                                                </div>

                                                                <div>
                                                                    <span class="text-xs">{{ week.temperature_2m_max }}
                                                                        {{ city.daily_units.temperature_2m_max }}</span>
                                                                </div>
                                                                <div>
                                                                    <span class="text-xs">{{ week.rain_sum }} {{
                                                                        city.daily_units.rain_sum }}</span>
                                                                </div>
                                                                <div class="mt-2">

                                                                    <svg v-if="week.weather_code == 'Sunny' || week.weather_code == 'Mostly Sunny'"
                                                                        xmlns="http://www.w3.org/2000/svg" width="24"
                                                                        height="24" viewBox="0 0 24 24">
                                                                        <path fill="#f5cf0f"
                                                                            d="M11 5V1h2v4zm6.65 2.75l-1.375-1.375l2.8-2.875l1.4 1.425zM19 13v-2h4v2zm-8 10v-4h2v4zM6.35 7.7L3.5 4.925l1.425-1.4L7.75 6.35zm12.7 12.8l-2.775-2.875l1.35-1.35l2.85 2.75zM1 13v-2h4v2zm3.925 7.5l-1.4-1.425l2.8-2.8l.725.675l.725.7zM12 18q-2.5 0-4.25-1.75T6 12t1.75-4.25T12 6t4.25 1.75T18 12t-1.75 4.25T12 18m0-2q1.65 0 2.825-1.175T16 12t-1.175-2.825T12 8T9.175 9.175T8 12t1.175 2.825T12 16m0-4" />
                                                                    </svg>
                                                                    <svg v-if="week.weather_code == 'Partly Cloudy' || week.weather_code == 'Cloudy' || week.weather_code == 'Mostly Cloudy'"
                                                                        xmlns="http://www.w3.org/2000/svg" width="24"
                                                                        height="24" viewBox="0 0 512 512">
                                                                        <defs>
                                                                            <symbol id="meteoconsPartlyCloudyDayFill0"
                                                                                viewBox="0 0 196 196">
                                                                                <circle cx="98" cy="98" r="40"
                                                                                    fill="url(#meteoconsPartlyCloudyDayFill4)"
                                                                                    stroke="#f8af18"
                                                                                    stroke-miterlimit="10"
                                                                                    stroke-width="4" />
                                                                                <path fill="none" stroke="#fbbf24"
                                                                                    stroke-linecap="round"
                                                                                    stroke-miterlimit="10"
                                                                                    stroke-width="12"
                                                                                    d="M98 31.4V6m0 184v-25.4M145.1 51l18-17.9M33 163l18-17.9M51 51L33 33m130.1 130.1l-18-18M6 98h25.4M190 98h-25.4">
                                                                                    <animateTransform additive="sum"
                                                                                        attributeName="transform"
                                                                                        dur="6s"
                                                                                        repeatCount="indefinite"
                                                                                        type="rotate"
                                                                                        values="0 98 98; 45 98 98" />
                                                                                </path>
                                                                            </symbol>
                                                                            <symbol id="meteoconsPartlyCloudyDayFill1"
                                                                                viewBox="0 0 350 222">
                                                                                <path
                                                                                    fill="url(#meteoconsPartlyCloudyDayFill3)"
                                                                                    stroke="#e6effc"
                                                                                    stroke-miterlimit="10"
                                                                                    stroke-width="6"
                                                                                    d="m291 107l-2.5.1A83.9 83.9 0 0 0 135.6 43A56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z" />
                                                                            </symbol>
                                                                            <symbol id="meteoconsPartlyCloudyDayFill2"
                                                                                viewBox="0 0 363 258">
                                                                                <use width="196" height="196"
                                                                                    href="#meteoconsPartlyCloudyDayFill0" />
                                                                                <use width="350" height="222"
                                                                                    href="#meteoconsPartlyCloudyDayFill1"
                                                                                    transform="translate(13 36)" />
                                                                            </symbol>
                                                                            <linearGradient
                                                                                id="meteoconsPartlyCloudyDayFill3"
                                                                                x1="99.5" x2="232.6" y1="30.7"
                                                                                y2="261.4"
                                                                                gradientUnits="userSpaceOnUse">
                                                                                <stop offset="0" stop-color="#f3f7fe" />
                                                                                <stop offset=".5"
                                                                                    stop-color="#f3f7fe" />
                                                                                <stop offset="1" stop-color="#deeafb" />
                                                                            </linearGradient>
                                                                            <linearGradient
                                                                                id="meteoconsPartlyCloudyDayFill4"
                                                                                x1="78" x2="118" y1="63.4" y2="132.7"
                                                                                gradientUnits="userSpaceOnUse">
                                                                                <stop offset="0" stop-color="#fbbf24" />
                                                                                <stop offset=".5"
                                                                                    stop-color="#fbbf24" />
                                                                                <stop offset="1" stop-color="#f59e0b" />
                                                                            </linearGradient>
                                                                        </defs>
                                                                        <use width="363" height="258"
                                                                            href="#meteoconsPartlyCloudyDayFill2"
                                                                            transform="translate(68 109)" />
                                                                    </svg>
                                                                    <svg v-if="week.weather_code == 'Light Rain'"
                                                                        xmlns="http://www.w3.org/2000/svg" width="24"
                                                                        height="24" viewBox="0 0 24 24">
                                                                        <g fill="none">
                                                                            <path fill="#fafafa"
                                                                                d="M12 12.5H6v1h6zm6 0h-6v1h6zm2.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1a3.5 3.5 0 0 0 3.5-3.5zM18 7.5a2.5 2.5 0 0 1 2.5 2.5h1A3.5 3.5 0 0 0 18 6.5zm-.98-1.75A5.5 5.5 0 0 0 12 2.5v1a4.5 4.5 0 0 1 4.108 2.66zM12 2.5a5.5 5.5 0 0 0-5.02 3.25l.912.41A4.5 4.5 0 0 1 12 3.5zm-6 4A3.5 3.5 0 0 0 2.5 10h1A2.5 2.5 0 0 1 6 7.5zM2.5 10A3.5 3.5 0 0 0 6 13.5v-1A2.5 2.5 0 0 1 3.5 10zm4.48-4.25c-.209.464-.595.75-.98.75v1c.895 0 1.577-.637 1.892-1.34zM18 6.5c-.385 0-.771-.286-.98-.75l-.912.41c.316.703.997 1.34 1.892 1.34z" />
                                                                            <path stroke="#fafafa"
                                                                                stroke-linecap="round"
                                                                                d="M12 19v-2m5 3v-3M7 21v-4" />
                                                                        </g>
                                                                    </svg>

                                                                    <svg v-if="week.weather_code == 'Heavy Rain'"
                                                                        xmlns="http://www.w3.org/2000/svg" width="24"
                                                                        height="24" viewBox="0 0 24 24">
                                                                        <g fill="none">
                                                                            <path
                                                                                d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                                                                            <path fill="#fafafa"
                                                                                d="M9.889 19.656a1 1 0 0 1 1.932.518l-.259.966a1 1 0 0 1-1.932-.518zm-2.195-1.862a1 1 0 0 1 .707 1.224l-.259.966a1 1 0 1 1-1.932-.517l.259-.966a1 1 0 0 1 1.225-.707m7.333 0a1 1 0 0 1 .707 1.224l-.258.966a1 1 0 1 1-1.932-.517l.258-.966a1 1 0 0 1 1.225-.707m-2.878-2.709a1 1 0 0 1 .707 1.225l-.259.966a1 1 0 1 1-1.932-.518l.26-.966a1 1 0 0 1 1.224-.707M11.5 2a6.5 6.5 0 0 1 6.086 4.212a6.002 6.002 0 0 1 .344 11.471a3 3 0 0 0 .512-1.045l.26-.966a3 3 0 0 0-5.478-2.309a3 3 0 0 0-2.277-.16a3 3 0 0 0-5.375.917l-.259.965a3 3 0 0 0 0 1.553a3 3 0 0 0-.581.819A5 5 0 0 1 5 8.417A6.5 6.5 0 0 1 11.5 2M8.729 13.93a1 1 0 0 1 .707 1.225l-.259.966a1 1 0 1 1-1.932-.518l.26-.966a1 1 0 0 1 1.224-.707m7.334 0a1 1 0 0 1 .707 1.225l-.26.966a1 1 0 1 1-1.931-.518l.259-.966a1 1 0 0 1 1.225-.707" />
                                                                        </g>
                                                                    </svg>
                                                                    <svg v-if="week.weather_code == 'Thunderstorms'"
                                                                        xmlns="http://www.w3.org/2000/svg" width="24"
                                                                        height="24" viewBox="0 0 512 512">
                                                                        <defs>
                                                                            <linearGradient
                                                                                id="meteoconsThunderstormsFill0"
                                                                                x1="99.5" x2="232.6" y1="30.7"
                                                                                y2="261.4"
                                                                                gradientUnits="userSpaceOnUse">
                                                                                <stop offset="0" stop-color="#f3f7fe" />
                                                                                <stop offset=".5"
                                                                                    stop-color="#f3f7fe" />
                                                                                <stop offset="1" stop-color="#deeafb" />
                                                                            </linearGradient>
                                                                            <linearGradient
                                                                                id="meteoconsThunderstormsFill1"
                                                                                x1="8.7" x2="80.9" y1="17.1" y2="142.1"
                                                                                gradientUnits="userSpaceOnUse">
                                                                                <stop offset="0" stop-color="#f7b23b" />
                                                                                <stop offset=".5"
                                                                                    stop-color="#f7b23b" />
                                                                                <stop offset="1" stop-color="#f59e0b" />
                                                                            </linearGradient>
                                                                            <symbol id="meteoconsThunderstormsFill2"
                                                                                viewBox="0 0 350 222">
                                                                                <path
                                                                                    fill="url(#meteoconsThunderstormsFill0)"
                                                                                    stroke="#e6effc"
                                                                                    stroke-miterlimit="10"
                                                                                    stroke-width="6"
                                                                                    d="m291 107l-2.5.1A83.9 83.9 0 0 0 135.6 43A56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z" />
                                                                            </symbol>
                                                                            <symbol id="meteoconsThunderstormsFill3"
                                                                                viewBox="0 0 102.7 186.8">
                                                                                <path
                                                                                    fill="url(#meteoconsThunderstormsFill1)"
                                                                                    stroke="#f6a823"
                                                                                    stroke-miterlimit="10"
                                                                                    stroke-width="4"
                                                                                    d="m34.8 2l-32 96h32l-16 80l80-112h-48l32-64h-48z">
                                                                                    <animate
                                                                                        id="meteoconsThunderstormsFill4"
                                                                                        attributeName="opacity"
                                                                                        begin="0s; x1.end+.67s"
                                                                                        dur="1.33s"
                                                                                        keyTimes="0; .38; .5; .63; .75; .86; .94; 1"
                                                                                        values="1; 1; 0; 1; 0; 1; 0; 1" />
                                                                                </path>
                                                                            </symbol>
                                                                        </defs>
                                                                        <use width="350" height="222"
                                                                            href="#meteoconsThunderstormsFill2"
                                                                            transform="translate(81 145)" />
                                                                        <use width="102.7" height="186.7"
                                                                            href="#meteoconsThunderstormsFill3"
                                                                            transform="translate(205.23 291)" />
                                                                    </svg>
                                                                    <svg v-if="week.weather_code == 'Snowy'"
                                                                        xmlns="http://www.w3.org/2000/svg" width="24"
                                                                        height="24" viewBox="0 0 24 24">
                                                                        <path fill="currentColor"
                                                                            d="M6 14a1 1 0 0 1 1 1a1 1 0 0 1-1 1a5 5 0 0 1-5-5a5 5 0 0 1 5-5c1-2.35 3.3-4 6-4c3.43 0 6.24 2.66 6.5 6.03L19 8a4 4 0 0 1 4 4a4 4 0 0 1-4 4h-1a1 1 0 0 1-1-1a1 1 0 0 1 1-1h1a2 2 0 0 0 2-2a2 2 0 0 0-2-2h-2V9a5 5 0 0 0-5-5C9.5 4 7.45 5.82 7.06 8.19C6.73 8.07 6.37 8 6 8a3 3 0 0 0-3 3a3 3 0 0 0 3 3m1.88 4.07l2.19-.57l-1.61-1.62c-.39-.38-.39-1.02 0-1.42c.39-.39 1.04-.39 1.42 0l1.62 1.61l.57-2.19a1 1 0 1 1 1.93.52l-.59 2.19L15.6 16a1 1 0 1 1 .52 1.93l-2.19.57l1.61 1.62c.39.38.39 1.03 0 1.42s-1.04.39-1.42 0l-1.62-1.61l-.57 2.19A1 1 0 1 1 10 21.6l.59-2.19L8.4 20a1 1 0 1 1-.52-1.93" />
                                                                    </svg>

                                                                    <svg v-if="week.weather_code == 'Rainy' || week.weather_code == 'Moderate Rain'"
                                                                        xmlns="http://www.w3.org/2000/svg" width="24"
                                                                        height="24" viewBox="0 0 512 512">
                                                                        <path fill="currentColor"
                                                                            d="M456.26 139.37c-16.77-16.73-39.17-28.41-65.17-34a16 16 0 0 1-11.19-9a142.24 142.24 0 0 0-42.19-53.21C314.48 25.39 286.23 16 256 16a140.24 140.24 0 0 0-93.5 35.32c-24.2 21.56-40.91 51.34-48.43 85.83a16.05 16.05 0 0 1-11.72 12.18c-25 6.3-35.71 12.54-49.21 24.56C34 190.93 24 214.14 24 240.8c0 30.55 11.23 55.64 32.47 72.56C75.08 328.17 100.5 336 130 336h234c33.2 0 64.11-11.46 87-32.28c23.84-21.65 37-51.67 37-84.52c0-31.49-11-59.09-31.74-79.83M112 448a16 16 0 0 1-13.3-24.88l32-48a16 16 0 0 1 26.62 17.76l-32 48A16 16 0 0 1 112 448m48 48a16 16 0 0 1-13.29-24.88l64-96a16 16 0 0 1 26.62 17.76l-64 96A16 16 0 0 1 160 496m112-48a16 16 0 0 1-13.3-24.88l32-48a16 16 0 0 1 26.62 17.76l-32 48A16 16 0 0 1 272 448m48 48a16 16 0 0 1-13.3-24.88l64-96a16 16 0 0 1 26.62 17.76l-64 96A16 16 0 0 1 320 496" />
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
                            </div>
                            <div class="col-span-2">
                                <div class="h-full w-full">
                                    <div class=" flex gap-4 mt-4 w-full text-white">


                                        <div class="flex flex-col w-full  rounded-xl bg-black bg-opacity-50 p-2"
                                            style="background-color: rgba(0, 0, 0, 0.6);border-bottom:1px solid white;;">
                                            <div class="flex justify-between align-items-flex-start gap-2">

                                                <div class="flex flex-col gap-2">
                                                    <div class="flex gap-2">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 32 32">
                                                                <path fill="currentColor"
                                                                    d="M13 30H9a2.003 2.003 0 0 1-2-2v-8h2v8h4v-8h2v8a2.003 2.003 0 0 1-2 2m12-10h-1.75L21 29.031L18.792 20H17l2.5 10h3zM15 2h2v5h-2zm6.688 6.9l3.506-3.506l1.414 1.414l-3.506 3.506zM25 15h5v2h-5zM2 15h5v2H2zm3.395-8.192l1.414-1.414L10.315 8.9L8.9 10.314zM22 17h-2v-1a4 4 0 0 0-8 0v1h-2v-1a6 6 0 0 1 12 0Z" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <h1 class="text-1xl uppercase">UV Index</h1>
                                                        </div>
                                                    </div>


                                                    <div class="flex-col">
                                                        <span class="text-3xl">{{ city.uv_index_max }}</span>
                                                    </div>
                                                    <span
                                                        v-if="city.uv_index_max > 0 && city.uv_index_max <= 4">Moderate</span>
                                                    <span
                                                        v-if="city.uv_index_max > 4 && city.uv_index_max <= 7">High</span>
                                                    <span v-if="city.uv_index_max > 7">Extreme Risk</span>
                                                </div>
                                                <div>
                                                    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="84" height="24"
                                                        viewBox="0 0 14 4">
                                                        <path fill="currentColor"
                                                            d="M2.31 2.5H.5C.22 2.5 0 2.28 0 2s.22-.5.5-.5h1.81c-.04.16-.07.33-.07.5s.03.34.07.5m11.19-1H6.17c.04.16.07.33.07.5s-.03.34-.07.5h7.33c.28 0 .5-.22.5-.5s-.22-.5-.5-.5m-7.33 1c-.22.86-1 1.5-1.93 1.5s-1.71-.64-1.93-1.5c-.04-.16-.07-.33-.07-.5s.03-.34.07-.5C2.53.64 3.31 0 4.24 0s1.71.64 1.93 1.5c.04.16.07.33.07.5s-.03.34-.07.5M5.24 2c0-.55-.45-1-1-1s-1 .45-1 1s.45 1 1 1s1-.45 1-1" />
                                                    </svg> -->
                                                </div>
                                            </div>
                                            <p class="text-xs mt-5"></p>
                                            <slider v-model="city.uv_index_max" color="#FB278D" track-color="#FEFEFE"
                                                :max="10" :min="0" />

                                        </div>
                                        <div class="flex flex-col w-full  rounded-xl bg-black bg-opacity-50 p-2"
                                            style="background-color: rgba(0, 0, 0, 0.6);border-bottom:1px solid white;;">
                                            <div class="flex justify-between align-items-flex-start gap-2">

                                                <div class="flex flex-col gap-2">
                                                    <div class="flex gap-2">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 256 256">
                                                                <path fill="currentColor"
                                                                    d="M24 104a12 12 0 0 1 0-24h96a12 12 0 0 0 0-24a15.07 15.07 0 0 0-10.26 4.45a12 12 0 0 1-17-16.9A39.34 39.34 0 0 1 120 32a36 36 0 0 1 0 72Zm184-36a39.34 39.34 0 0 0-27.3 11.55a12 12 0 0 0 17 16.9A15.07 15.07 0 0 1 208 92a12 12 0 0 1 0 24H32a12 12 0 0 0 0 24h176a36 36 0 0 0 0-72m-56 84H40a12 12 0 0 0 0 24h112a12 12 0 0 1 0 24a15.1 15.1 0 0 1-10.27-4.45a12 12 0 1 0-17 16.9A39.34 39.34 0 0 0 152 224a36 36 0 0 0 0-72" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <h1 class="text-1xl uppercase">wind</h1>
                                                        </div>
                                                    </div>


                                                    <div class="flex-col">
                                                        <span class="text-3xl">{{ city.current_weather.windspeed }}
                                                            {{ city.current_weather_units.windspeed }}</span>
                                                    </div>

                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"
                                                        viewBox="0 0 24 24">
                                                        <path fill="currentColor"
                                                            d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z">
                                                            <animateTransform id="eosIconsCompass0"
                                                                attributeName="transform" attributeType="XML"
                                                                begin="0;eosIconsCompass2.end" dur="1s" from="-90 12 12"
                                                                to="0 12 12" type="rotate" />
                                                            <animateTransform id="eosIconsCompass1"
                                                                attributeName="transform" attributeType="XML"
                                                                begin="eosIconsCompass0.end" dur="1s" from="0 12 12"
                                                                to="-90 12 12" type="rotate" />
                                                            <animateTransform id="eosIconsCompass2"
                                                                attributeName="transform" attributeType="XML"
                                                                begin="eosIconsCompass1.end" dur="1s" from="-90 12 12"
                                                                to="270 12 12" type="rotate" />
                                                        </path>
                                                    </svg>
                                                </div>
                                            </div>

                                            <p class="text-xs mt-5"></p>
                                            <p class="text-xs mt-5"></p>
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
import imageSunnyPath from '@/assets/images/Sunny.jpg';
import imageCloudyPath from '@/assets/images/Cloudy.jpg';
import imageThunderstormsPath from '@/assets/images/Thunderstorms.jpg';
import imageSnowyPath from "@/assets/images/Snowy.avif";
import { useCityListStore } from "@/stores/cities";
import SearchList from "../components/SearchList.vue";
import Setting from "../components/UnitSetting.vue";
import { storeToRefs } from "pinia";
import moment from "moment-timezone";
import slider from "vue3-slider"
const store = useCityListStore();
const { cityList, isMetric } = storeToRefs(store);
const isLoading = ref(true);
onMounted(async () => {
    await getDefaultData();
});

async function getDefaultData() {
    const requests = cityList.value.map((city) => {
        const { $axios } = getCurrentInstance().appContext.config.globalProperties;
        var url = "";
        isMetric.value = false
        if (!isMetric.value) {
            url = `?latitude=${city.latitude}&longitude=${city.longitude}&timezone=GMT&current_weather=true&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,visibility,precipitation_probability,weather_code&forecast_hours=24&forecast_minutely_15=4&daily=temperature_2m_min,uv_index_max,uv_index_clear_sky_max,temperature_2m_max,sunrise,sunset,rain_sum,precipitation_sum,precipitation_probability_max,weather_code`;
        } else {
            url = `?latitude=${city.latitude}&longitude=${city.longitude}&timezone=GMT&current_weather=true&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,visibility,precipitation_probability,weather_code&forecast_hours=24&forecast_minutely_15=4&daily=temperature_2m_min,uv_index_max,uv_index_clear_sky_max,temperature_2m_max,sunrise,sunset,rain_sum,precipitation_sum,precipitation_probability_max,weather_code&temperature_unit=fahrenheit&wind_speed_unit=mph`;
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
        cityList.value[index].uv_index_max = response.data.daily.uv_index_max.length > 0 ? response.data.daily.uv_index_max[0] : 0;
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
        cityList.value[index].hourly_data = response.data.hourly
        cityList.value[index].hourly_units = response.data.hourly_units
        cityList.value[index].daily_data = rearrangedData;
        cityList.value[index].per_hour_data = rearrangedDataHours;
        cityList.value[index].weather_code = rearrangedData[moment().format("YYYY-MM-DD")].weather_code;
        if (rearrangedData[moment().format("YYYY-MM-DD")].weather_code == 'Rainy' || rearrangedData[moment().format("YYYY-MM-DD")].weather_code == 'Light Rainy' || rearrangedData[moment().format("YYYY-MM-DD")].weather_code == 'Moderate Rainy' || rearrangedData[moment().format("YYYY-MM-DD")].weather_code == 'Heavy Rainy') {
            cityList.value[index].bg_image = `url(${imagePath})`
        }
        else if (rearrangedData[moment().format("YYYY-MM-DD")].weather_code == 'Sunny' || rearrangedData[moment().format("YYYY-MM-DD")].weather_code == 'Mostly Sunny') {
            cityList.value[index].bg_image = `url(${imageSunnyPath})`

        }
        else if (rearrangedData[moment().format("YYYY-MM-DD")].weather_code == 'Partly Cloudy' || rearrangedData[moment().format("YYYY-MM-DD")].weather_code == 'Mostly Cloudy' || rearrangedData[moment().format("YYYY-MM-DD")].weather_code == 'Cloudy') {
            cityList.value[index].bg_image = `url(${imageCloudyPath})`

        }
        else if (rearrangedData[moment().format("YYYY-MM-DD")].weather_code == 'Thunderstorms') {
            cityList.value[index].bg_image = `url(${imageThunderstormsPath})`

        }
        else if (rearrangedData[moment().format("YYYY-MM-DD")].weather_code == 'Snowy') {
            cityList.value[index].bg_image = `url(${imageSnowyPath})`

        }
        else {
            cityList.value[index].bg_image = `url(${imagePath})`
        }
    });
    isLoading.value = false;
}
function classifyWeather(weatherCode) {
    if (weatherCode >= 0 && weatherCode <= 1) {
        return "Sunny";
    }
    else if (weatherCode == 2) {
        return "Mostly Sunny";
    }
    else if (weatherCode == 3) {
        return "Partly Cloudy";
    }
    else if (weatherCode == 4) {
        return "Mostly Cloudy";
    }
    else if (weatherCode == 5) {
        return "Cloudy";
    }
    else if (weatherCode == 6) {
        return "Light Rain";
    }
    else if (weatherCode == 7) {
        return "Moderate Rain";
    }
    else if (weatherCode == 8) {
        return "Heavy Rain";
    }
    else if (weatherCode == 9) {
        return "Thunderstorms";
    }
    else if (weatherCode == 10) {
        return "Snowy";
    }
    else {
        return "Rainy";
    }
}
function getLoadingStatus(val){
    if(val == true){
        const loader = document.querySelector('.loader-overlay');
        loader.classList.toggle('hidden');
    }
    else{
        const loader = document.querySelector('.loader-overlay');
        loader.classList.toggle('hidden');
    }
   
}
</script>

<style scoped>
.weather-card {
    display: flex !important;
    flex-direction: row;
    /* Default for larger screens */
}

.weather-card-mobile {
    display: flex !important;
    flex-direction: column;
    height: 100vh;
    overflow-y: scroll;
    margin-top: 10%;
}

.card-scroll {
    scrollbar-width: none;
    scrollbar-color: #888 #f1f1f1;

}

.hover-card {
    transition: background-color 0.3s;
}

.hover-card:hover {
    background-color: rgba(255, 255, 255, 0.2);
    /* Change this to your desired color */
}

@media (min-width: 768px) {
    .weather-card {
        flex-direction: row;
    }
}
@keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        .spinner {
            border-top-color: transparent;
            border-right-color: transparent;
            border-bottom-color: transparent;
            border-left-color: #3490dc; /* Tailwind blue-500 */
            animation: spin 1s linear infinite;
        }
</style>