import React from 'react';
import WeatherLocation from './index'
import { PropTypes } from 'prop-types';




const LocationList = ({ cities, onSelectedLocation }) => {

    const handleWeatherLocationClick = city => {
        console.log("handleWeatherLocationClick")
        onSelectedLocation(city)
    }
    const strtoComponents = cities => (
        cities.map( (city => 
            
                <WeatherLocation 
                    key={city} 
                    city={city} 
                    onWeatherLocationClick= { () => handleWeatherLocationClick(city)}/>))
        )
    
    return (
    <div className='App'>
        {strtoComponents(cities)}
    </div>)
};

Location.prototypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;