import CountryInformation from "./CountryInformation"

const CountryList = ({countries, selectCountryHandler, selectedCountryWeather}) => {
        return (
            <div>
                <br></br>
                {countries.length >= 10 && <div>Too many matches, specify another filter</div>}
                {countries.length === 0 && <div>No matches, specify another filter</div>}
                {countries.length === 1 && 
                    // TODO: Work out how to update lat long here
                    < CountryInformation country={countries[0]} selectedCountryWeather={selectedCountryWeather} />}
                {countries.length > 1 && countries.length < 10 && countries.map(country => 
                    <div key={country.name.official}>
                        {country.name.common} {}
                        <button onClick={() => selectCountryHandler(country)}>show</button>
                    </div>) }
            </div>
        )
}

export default CountryList