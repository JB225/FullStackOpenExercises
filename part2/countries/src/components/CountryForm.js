const CountryFilter = ({handler}) => {
    return (
        <div>
            <form>
                <div>Find Countries: <input onChange={handler}/></div>
            </form>
        </div>
    )
}

export default CountryFilter