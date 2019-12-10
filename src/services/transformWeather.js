
import getTemp from './../notdependencies'
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
  
  } from './../constants/weather'

const  getWeatherState = weather_data => {
    return SUN;
  }

const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data);
    const temperature = getTemp(temp)

    const data = {
      humidity,
      temperature,
      weatherState,
      wind: `${speed} m/s`
    
    }
    return data;
  }

  export default transformWeather