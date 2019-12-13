import React, { Component } from 'react';
import './App.css';
import LocationList from './components/WeatherLocation/LocationList';
import CitySearcher from './components/CitySearcher/CitySearcher';





class App extends Component {
  constructor(props){
    super(props)
    this.state = 
    { 
      cities : [
      'Valencia,es',
      'Washington,us',
      'Tokio,jap',
    ]}
  }

  handleSelectionLocation = city => {
    console.log("handleSelectionLocation")
  }

  newCitiesData = (city) => {
    this.setState({cities: [...this.state.cities, city]})
  }
  

  handleSelectedLocation = city =>{
    console.log("handleSelectionLocation")
  }

  render() {
    return(
      <div >
        <CitySearcher changeCitiesState= {this.newCitiesData}/>
        <LocationList cities= {this.state.cities} onSelectedLocation ={this.handleSelectedLocation} />
      </div>
    )
  }
}



export default App;
