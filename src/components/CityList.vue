<template>
    <div v-for="(city, index) in cityList" :key="index">
        <div>
            <p>{{ city.name }}</p>
            <div v-if="city.temp_details">
                <p>Temperature:{{ city.temp_details.current_weather.temperature }}
                    {{ city.temp_details.current_weather_units.temperature }}</p>
                <p>WindSpeed:{{ city.temp_details.current_weather.windspeed }}
                    {{ city.temp_details.current_weather_units.windspeed }}</p>
                <p>Precipitation:{{ city.temp_details.current_weather.temperature }}
                    {{ city.temp_details.current_weather_units.temperature }}</p>
            </div>
        </div>

    </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { useCityListStore } from '@/stores/cities'
import { storeToRefs } from "pinia";
import axios from 'axios'
const store = useCityListStore()
const { cityList } = storeToRefs(store);

onMounted(async () => {
    console.log('in mounted')
    await getTempDetails();
})

async function getTempDetails() {
     const requests = cityList.value.map(city => {
          const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current_weather=true`;
          return axios.get(url);
        });
        const responses = await Promise.all(requests);
       responses.forEach((response,index) => {
          cityList.value[index].temp_details = response.data;
          console.log('cityList----data', response.data);
        });
    console.log('cityList----', cityList.value);
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