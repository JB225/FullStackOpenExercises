const CountryList = ({countries}) => {
    return (
        <div>
            {countries.map(country => 
                <li key={country.name}>
                    {country.name}
                </li>)}
        </div>
    )

}

export default CountryList