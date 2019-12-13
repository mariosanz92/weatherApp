import React, { Component } from 'react';
import './App.css';
import LocationList from './components/WeatherLocation/LocationList';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import getUrlWeatherByCity from './services/getUrlWeatherByCity'
import {capitalize} from './notdependencies'


class App extends Component {
  constructor(){
    super()
    this.state= 
    { city : '',
      cities : [
      'Valencia,es',
      'Washington,us',
      'Tokio,jap',
    ]}
  }
  handleChange = event => {
  this.setState({ city: event.target.value})
  }

  handleSelectionLocation = city => {
    console.log("handleSelectionLocation")
  }
  
  handleClick = () => {
    const api_weather = getUrlWeatherByCity(this.state.city)
    
    fetch(api_weather).then(resolve => { 
      return resolve.json()      
    }).then(data => {
      const capitalizeCity =  capitalize(this.state.city)
        if(capitalizeCity === data.name){
          this.setState({cities: [...this.state.cities, capitalizeCity], city: ""}) 
        }else alert("There isn't cities with this name")
    })
  }

  keyEnter = event => {
    if (event.key === "Enter") {
      this.handleClick();
    }
  }
  handleSelectedLocation = city =>{
    console.log("handleSelectionLocation")
  }
  render() {
    return(
      <div >
        <TextField className="inputContain" onKeyPress={this.keyEnter} value={this.state.city} placeholder="type your city" onChange={this.handleChange}/>
        <Button className= "buttonContain" onClick= {this.handleClick} variant="contained" color="primary" >add city</Button>
        <LocationList cities= {this.state.cities} onSelectedLocation ={this.handleSelectedLocation} />
      </div>
    )
  }
}



export default App;
