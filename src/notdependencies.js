
const getTemp = kelvin => {
    const kelvinToCelsius = kelvin - 273;
    let roundedKelvin = Number( kelvinToCelsius).toFixed(1);
    return roundedKelvin
  }

export default getTemp;
