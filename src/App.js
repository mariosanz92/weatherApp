import React from 'react';
import './App.css';
import LocationList from './components/WeatherLocation/LocationList';

const cities = [
  'Valencia,es',
  'Washington,us',
  'Tokio,jap',
  'London,uk'
]

function App() {
  return (
    <div className="App">
      <LocationList cities= {cities}/>
    </div>
  );
}

export default App;
