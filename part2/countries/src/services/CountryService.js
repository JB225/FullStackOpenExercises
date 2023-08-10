import axios from 'axios'
const baseURL = 'https://studies.cs.helsinki.fi/restcountries/'

const getAllCountries = () => {
    const request = axios.get(baseURL + '/api/all')
    return request.then(response => response.data)
}

const serviceMethods = {getAllCountries}

export default serviceMethods