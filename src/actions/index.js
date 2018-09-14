import axios from 'axios';
const API_KEY = '79a30d590c0fd3367a97b6a11d588695';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},PL`;
    const request = axios.get(url);


    return {
        type: FETCH_WEATHER,
        payload: request
    };
}