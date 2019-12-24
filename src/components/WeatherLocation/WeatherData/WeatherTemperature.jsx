import React from 'react';
import WeatherIcons from 'react-weathericons';
import './styles.css';
import PropTypes from 'prop-types';
import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE

} from '../../../constants/weather'

const icons = {
    [THUNDER]: "day-thunderstorm",
    [CLOUD]: "cloud",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [DRIZZLE]: "day-showers"    
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    const sizeIcon = "4x";
    
    return icon ? <WeatherIcons className="wicon" name={icon} size= {sizeIcon}/> : <WeatherIcons name={icons[SUN]} size={sizeIcon}/>
};

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className = "weatherTemperatureCont">
        {getWeatherIcon(weatherState)}
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{` C°`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
}

export default WeatherTemperature;