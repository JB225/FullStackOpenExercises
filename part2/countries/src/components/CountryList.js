import CountryInformation from "./CountryInformation"

const CountryList = ({countries, selectCountryHandler}) => {
        return (
            <div>
                <br></br>
                {countries.length >= 10 && <div>Too many matches, specify another filter</div>}
                {countries.length === 0 && <div>No matches, specify another filter</div>}
                {countries.length === 1 && < CountryInformation country={countries[0]} />}
                {countries.length > 1 && countries.length < 10 && countries.map(country => 
                    <div key={country.name.official}>
                        {country.name.common} {}
                        <button value={country.name.common} onClick={selectCountryHandler}>show</button>
                    </div>) }
            </div>
        )
}

export default CountryList