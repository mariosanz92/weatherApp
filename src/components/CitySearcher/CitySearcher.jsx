/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import {capitalize} from './../../notdependencies';
import "./styles.css"


class CitySearcher extends Component  { 
    constructor(props) {
        super(props);
        this.state = {city: ""};
      }

    handleClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city)
        fetch(api_weather).then(resolve => { 
          return resolve.json()      
        }).then(data => {
            const capitalizedCity = capitalize(this.state.city)
            if(capitalizedCity === data.name){
                this.sendData(capitalizedCity)
            }else alert(`the city ${this.state.city} do not exist`)
                  this.setState({city: ""})
        })
    }

    sendData = (city) =>{
        this.props.changeCitiesState(city);
        this.setState({city: ""})
    }
    

    handleChange = event => {
        this.setState({city: event.target.value})   
    }


    keyEnter = (event) => {
        if (event.key === "Enter") {
            this.handleClick()
        }
    }

    render() { 
      return (
        <div className="add-city-cont">
            <TextField className="inputContain" onKeyPress={this.keyEnter} value={this.state.city} placeholder="type your city" onChange={this.handleChange}/>
            <Button className= "buttonContain" onClick= {this.handleClick} variant="contained" color="primary">add city</Button>
        </div>
      )
  }
  
}  

export default CitySearcher;
