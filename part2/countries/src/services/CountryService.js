import axios from 'axios'
const baseCountriesURL = 'https://studies.cs.helsinki.fi/restcountries/'
const baseWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?'
const apiKey = process.env.REACT_APP_API_KEY

const getAllCountries = () => {
    const request = axios.get(baseCountriesURL + '/api/all')
    return request.then(response => response.data)
}

const getWeather = (lat, long) => {
    const request = axios.get(baseWeatherURL + `lat=${lat}&lon=${long}&appid=${apiKey}`)
    return request.then(response => response.data)
}

const serviceMethods = {getAllCountries, getWeather}

export default serviceMethods