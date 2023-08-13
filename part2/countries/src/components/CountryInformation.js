const CountryInformation = ({country, selectedCountryWeather}) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <div>Capital: {country.capital}</div>
            <div>Area: {country.area}</div>
            <h3>Languages: </h3>
            {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
            <br></br>
            <img src={country.flags.png} alt={country.name.common}/>
            <br></br>
            {selectedCountryWeather != null && 
            <div>
                 {console.log(selectedCountryWeather)}
                <h1>Weather in {selectedCountryWeather.name}</h1>
                <div>Temperature {(selectedCountryWeather.main.temp - 273.15).toFixed(2)} celsius</div>
                <img src={`https://openweathermap.org/img/wn/${selectedCountryWeather.weather[0].icon}@2x.png`} alt={`Weather icon`}/>
                <div>Wind {selectedCountryWeather.wind.speed} m/s</div>
            </div>}
        </div>
    )
}

export default CountryInformation