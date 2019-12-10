import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import Location from './Location';
import WeatherData from './WeatherData';
import {api_weather} from './../../constants/api_url'
import transformWeather from './../../services/transformWeather'
import './styles.css';

class WeatherLocation extends Component {

  constructor() {
    super();
    this.state = {
      data: null,
    }
  }

  componentDidMount(){
    this.handleUpdateClick();
  }

  handleUpdateClick = () => {
    fetch(api_weather).then(resolve => {     
      return resolve.json()
    }).then(data => {
        const newWeather = transformWeather(data);
        console.log(newWeather)
        this.setState({
        data: newWeather
      })
    })
  }
    
  render() {
    const {city, data } = this.state;
    return(
      <div className= "weatherLocationCont">
        <Location city = {city}/>
        { !data ? <CircularProgress size = {50} /> : <WeatherData data= {data}/> }
      </div>
  )}
}

export default WeatherLocation;