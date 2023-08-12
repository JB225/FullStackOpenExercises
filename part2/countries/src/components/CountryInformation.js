const CountryInformation = ({country}) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <div>Capital: {country.capital}</div>
            <div>Area: {country.area}</div>
            <h3>Languages: </h3>
            {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
            <br></br>
            <img src={country.flags.png} alt={country.name.common}/>
        </div>
    )
}

export default CountryInformation