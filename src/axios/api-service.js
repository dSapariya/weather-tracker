import Vue from 'vue';
import axios from "axios";
export const API_URL = 'https://api.open-meteo.com/v1/forecast';
const mixins = Vue.mixin({
    methods: {
        async getHTTPGetRequest(url){
            const data = await axios.get(url)
            .then(response => {
                let data = response.data;
                return data;
            })
            .catch( e => {
                console.log('e',e)
                return null;
            })
            return data;
        }
    },
})
export default mixins;
