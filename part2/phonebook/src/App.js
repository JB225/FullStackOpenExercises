import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Numbers from './components/Numbers'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
  }, [])

  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const filteredPersons = persons.filter(person => person.name === newName)

    if (filteredPersons.length > 0) {
      alert(`${newName} is already in the phonebook`)
    } else {
      const nameObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNewFilter = (event) => {
    setFilter(event.target.value)
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handler={handleNewFilter}/>
      <h2>Add a new number</h2>
      <PersonForm name={newName} number={newNumber} nameHandler={handleNewName} numberHandler={handleNewNumber} addHandler={addName}/>
      <h2>Numbers</h2>
      <Numbers persons={personsToShow}/>
    </div>
  )
}

export default App