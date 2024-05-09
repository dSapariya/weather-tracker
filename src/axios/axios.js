import axios from "axios";
export const API_URL = 'https://api.open-meteo.com/v1/forecast';
export default axios.create({
    baseURL:API_URL,
    headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
    }
})
