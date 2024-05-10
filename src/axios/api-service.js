import axios from 'axios';
const baseURL = 'https://api.open-meteo.com/v1/forecast';

const axiosInstance = axios.create({
    baseURL,
    headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
    }
});

export default axiosInstance;
