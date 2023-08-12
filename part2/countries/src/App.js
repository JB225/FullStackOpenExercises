import {useState, useEffect} from 'react'
import CountryFilter from './components/CountryForm'
import CountryList from './components/CountryList'
import countryService from './services/CountryService'

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    countryService.getAllCountries().then(importedCountries => setCountries(importedCountries))
  }, [])

  const handleCountryFilter = (event) => {
    setFilter(event.target.value)
  }

  const countriesToShow = countries.filter(country => {
    return country.name.common.toLowerCase().includes(filter.toLowerCase())
  })

  return (
    <div>
      <CountryFilter handler={handleCountryFilter}/>
      <CountryList countries={countriesToShow}/>
    </div>
  );
}

export default App;
