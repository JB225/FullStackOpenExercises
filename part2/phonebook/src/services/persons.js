import axios from 'axios'
// const baseUrl = 'http://localhost:3001/api/persons'
// const baseUrl = 'https://phonebook-backend-bomb.onrender.com/api/persons'
const baseUrl = '/api/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const deletePerson = id => {
  return axios.delete(baseUrl + `/${id}`)
}

const updateNumber = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

const serviceMethods = {getAll, create, deletePerson, updateNumber}

export default serviceMethods