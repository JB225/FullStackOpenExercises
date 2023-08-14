import {useState, useEffect} from 'react'
import CountryFilter from './components/CountryForm'
import CountryList from './components/CountryList'
import countryService from './services/CountryService'

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  const [weatherLat, setWeatherLat] = useState(0)
  const [weatherLong, setWeatherLong] = useState(0)
  const [selectedCountryWeather, setSelectedCountryWeather] = useState(null)


  useEffect(() => {
    countryService.getAllCountries().then(importedCountries => setCountries(importedCountries))
  }, [])

  useEffect(() => {
        countryService.getWeather(weatherLat, weatherLong)
        .then(importedWeather => setSelectedCountryWeather(importedWeather))
  }, [weatherLat, weatherLong])

  const handleCountryFilter = (event) => {
    setFilter(event.target.value)
  }

  const handleCountrySelected = (country) => {
    setFilter(country.name.common)
  }

  const countriesToShow = countries.filter(country => {
    return country.name.common.toLowerCase().includes(filter.toLowerCase())
  })

  const updateLatLongValues = (country) => {
    setWeatherLat(country.latlng[0])
    setWeatherLong(country.latlng[1])
  }

  return (
    <div>
      <CountryFilter handler={handleCountryFilter}/>
      <CountryList 
        countries={countriesToShow} 
        selectCountryHandler={handleCountrySelected} 
        selectedCountryWeather={selectedCountryWeather}
        updateLatLongValues={updateLatLongValues}
      />
    </div>
  );
}

export default App;
