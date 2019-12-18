import React, { Component } from 'react';
import './styles.css';
import ForecastItem from './ForecastItem/index'

const days = [
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
}


class ForecastExtended extends Component {
    
    renderForecatItemDays(){

        return days.map( day => (<ForecastItem weekDay= {day} hour={10} data={data}/>))
    }

    

    render(){
        
    return (
        
        <div>
            <h2 className='forecast-title'>Pronóstico Extendido {this.props.city}</h2>
            {this.renderForecatItemDays()}
            
        </div>);
    }
}

export default ForecastExtended;