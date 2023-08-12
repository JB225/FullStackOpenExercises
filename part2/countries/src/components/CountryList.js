import CountryInformation from "./CountryInformation"

const CountryList = ({countries}) => {
    if (countries.length >= 10) {
        return (
            <div>
                <br></br>
                <div>Too many matches, specify another filter</div>
            </div>
        )
    } else if (countries.length === 0) {
        return (
            <div>
                <br></br>
                <div>No matches, specify another filter</div>
            </div>
        )
    } else if (countries.length === 1) {
        return (
            <div>
                <CountryInformation country={countries[0]} />
            </div>
        )
    } else {
        return (
            <div>
                <br></br>
                {countries.map(country => 
                    <div key={country.name.official}>
                        {country.name.common} {}
                        <button>show</button>
                    </div>)}
            </div>
        )
    }

}

export default CountryList