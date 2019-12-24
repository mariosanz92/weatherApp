import React, { Component } from 'react';
import './styles.css';
import {getForecastByCity} from './../services/getUrlWeatherByCity'
import transformForecast from './../services/transformForecast'
import { checkPropTypes } from 'prop-types';
import ForecastItem from './ForecastItem/index'
/* const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo'
]
const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal',
} */




class ForecastExtended extends Component {
    constructor() {
        super()
        this.state = {
            forecastData: null,
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city){
            this.setState({forecastData: null})
            this.updateCity(nextProps.city)
        }
    }
     updateCity = city => {
        const api_weather = getForecastByCity(city)
        fetch(api_weather).then(resolve => {     
          return resolve.json()
        }).then(data => {
            console.log(data)
            const forecastData = transformForecast(data)
            console.log(forecastData)
            this.setState({
                forecastData
            })
          })

     }

    componentDidMount(){
        this.updateCity(this.props.city)
    }



    renderForecatItemDays(){
       return this.state.forecastData.map(forecast => (
            <ForecastItem
                key= {`${forecast.weekDay}${forecast.hour}`}  
                weekDay= {forecast.weekDay} 
                hour={forecast.hour} 
                data={forecast.data}/>))
    }

    renderProgress = () => {
        return <h3>Cargando pronónstico extendido...</h3>
    }

    

    render(){
        return (
            <div>
                <h2 className='forecast-title'>Pronóstico Extendido {this.props.city}</h2>
                {this.state.forecastData ? this.renderForecatItemDays(this.state.forecastData) : this.renderProgress()}
            </div>);
    }
}

ForecastExtended.protoTypes = {
    city: checkPropTypes.toString.isRequired,
}

export default ForecastExtended;