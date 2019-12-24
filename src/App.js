import React, { Component } from 'react';
import { Grid, Col, Row } from "react-flexbox-grid"
import { connect } from 'react-redux';
import './App.css';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import LocationList from './components/LocationList';
import CitySearcher from './components/CitySearcher/CitySearcher';
import ForcastExtended from './components/ForecastExtended';
import { setCity } from './actions/index';


class App extends Component {
  constructor(props){
    super(props)
    this.state = 
    { selectedCity: null,
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
    this.setState({selectedCity : city})
    console.log(`tu ciudad es ${this.state.selectedCity}`)
 
    this.props.setCity(city);
  }

  render() {
    return(
      <div>
        <Grid>
          <Row>
            <AppBar position='sticky'>
              <Toolbar>
                <Typography variant='h4' color='inherit'>
                  Weather App
                </Typography>
              </Toolbar>
            </AppBar>
            <CitySearcher changeCitiesState= {this.newCitiesData}/>          
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList 
              cities= {this.state.cities}  
              onSelectedLocation= {this.handleSelectedLocation} />
            </Col>
            <Col xs={12} md={6}>
              <Paper elevation= {4}>
                <div className= "details">
                  {this.state.selectedCity && <ForcastExtended city={this.state.selectedCity}></ForcastExtended>}
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid> 
      </div>
    )
  }
}

App.protoTypes ={
  setCity : PropTypes.func.isRequired,
}

const mapDispatchToPropsActions= dispatch => ({
  setCity: value => dispatch(setCity(value))
});

const AppConnected = connect(null, mapDispatchToPropsActions)(App)

export default AppConnected;

