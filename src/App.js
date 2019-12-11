import React, { Component } from 'react';
import './App.css';
import LocationList from './components/WeatherLocation/LocationList';
import TextField from '@material-ui/core/TextField';



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

  handleClick = () => {
    this.setState({cities: [...this.state.cities, this.state.city]})

  }

  render() {
    return(
      <div className="App">
        <TextField className="" value={this.state.city} onChange={this.handleChange} />
        <button onClick= {this.handleClick} >add city</button>
        <LocationList cities= {this.state.cities}/>
      </div>
    )
  }
}
export default App;
