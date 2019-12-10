import React from 'react';
import WeatherLocation from './index'
import { PropTypes } from 'prop-types';



const strtoComponents = cities => (
    cities.map( (city) => <WeatherLocation key={city} city={city} />)
)

const LocationList = ({ cities }) => (
    <div className='App'>
        {strtoComponents(cities)}
    </div>
    );

Location.prototypes = {
    cities: PropTypes.array.isRequired,
}

export default LocationList;