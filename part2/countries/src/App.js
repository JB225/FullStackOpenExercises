import {useState, useEffect} from 'react'
import CountryList from './components/CountryList'
import countryService from './services/CountryService'

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    countryService.getAllCountries().then(importedCountries => console.log(countries))
  }, [])


  return (
    <div>
      <CountryList countries={countries}/>
    </div>
  );
}

export default App;
