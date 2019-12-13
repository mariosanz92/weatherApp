




const getTemp = kelvin => {
    const kelvinToCelsius = kelvin - 273;
    let roundedKelvin = Number( kelvinToCelsius).toFixed(1);
    return roundedKelvin
  }

const capitalize = (s) => {
  return s.charAt(0).toUpperCase() + s.slice(1)
}


export {getTemp, capitalize} ;
