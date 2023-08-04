import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Numbers from './components/Numbers'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    personService.getAll().then(initialPersons => setPersons(initialPersons))
  }, [])

  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
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

      personService
        .create(nameObject)
        .then(newPerson => {
          setPersons(persons.concat(newPerson))
          setNewName('')
          setNewNumber('')        
        })
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

  const handleDeletePerson = (name, id) => {
    if (window.confirm(`Delete ${name}?`)) {
      console.log(`DELETED ${name}`)

      axios
        .delete(`http://localhost:3001/persons/${id}`)
        .then(response => {
          console.log(persons)
          // TODO: Use state hook to update react information
        })
    }
  }

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handler={handleNewFilter}/>
      <h2>Add a new number</h2>
      <PersonForm name={newName} number={newNumber} nameHandler={handleNewName} numberHandler={handleNewNumber} addHandler={addPerson}/>
      <h2>Numbers</h2>
      <Numbers persons={personsToShow} deleteHandler={handleDeletePerson}/>
    </div>
  )
}

export default App

// Start json server with: json-server --port 3001 --watch db.json
// Start application with: npm start