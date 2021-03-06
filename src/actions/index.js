import axios from "axios";

const API_KEY = "b11ed8d1060d33415dac2e1dcf2258bb"; //b1b15e88fa797225412429c1c50c122a1 //b11ed8d1060d33415dac2e1dcf2258bb
const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city){
    const url = `${BASE_URL}&q=${city},in`;
    const request = axios.get(url);
    return({
        type : FETCH_WEATHER,
        payload : request
    });

}