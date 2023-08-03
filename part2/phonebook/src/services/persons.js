import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  // TODO: refactor to use this method
  return axios.post(baseUrl, newObject)
}

export default { getAll, create}