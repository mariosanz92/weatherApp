const location = "Valencia,es";
const api_key = "6d19187e3fa9b813f3e3f09b9cf48d80";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`