import React from 'react';
import WeatherIcons from 'react-weathericons';
import './styles.css';
import PropTypes from 'prop-types';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,

} from '../../../constants/weather'

const icons = {
    [CLOUD]: "day-sunny",
    [CLOUDY]: "cloud",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy"    
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];

    const sizeIcon = "4x";
    return icon ? <WeatherIcons className="wicon" name={icon} size= {sizeIcon}/> : <WeatherIcons name={icons.sunny} size={sizeIcon}/>
};

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className = "weatherTemperatureCont">
        {getWeatherIcon(weatherState)}
        <span className="temperature" >{`${temperature}`}</span>
        <span className="temperatureType">{` C°`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
}

export default WeatherTemperature;