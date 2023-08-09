import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Numbers from './components/Numbers'
import Notification from './components/Notification'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    personService.getAll().then(initialPersons => setPersons(initialPersons))
  }, [])

  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [personAddedMessage, setPersonAddedMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
 
  const addPerson = (event) => {
    event.preventDefault()
    const filteredPersons = persons.filter(person => person.name === newName)

    if (filteredPersons.length > 0) {
      const updateID = filteredPersons[0].id
      if (window.confirm(`${newName} is already added to the phonebook, would you like to replace the old number?`)) {
        const updatedPerson = {
          name: newName,
          number: newNumber,
          id: updateID
        }

        personService
          .updateNumber(updateID, updatedPerson)
          .then(setPersons(persons.map(p => p.id !== updateID ? p : updatedPerson)))
          .catch(error => {
            setErrorMessage(`Information of ${newName} has already been removed from the server`)
            setTimeout(() => {setErrorMessage(null)}, 5000)

          })
      }
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
          showPersonAddedNotification(newName)        
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
      personService.deletePerson(id).then(setPersons(persons.filter(person => person.id !== id)))
    }
  }

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  const showPersonAddedNotification = (name) => {
    setPersonAddedMessage(`Added ${name}`)
    setTimeout(() => {setPersonAddedMessage(null)}, 5000)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={personAddedMessage} color={'green'}/>
      <Notification message={errorMessage} color={'red'}/>
      <Filter filter={filter} handler={handleNewFilter}/>
      <h2>Add a new number</h2>
      <PersonForm name={newName} number={newNumber} nameHandler={handleNewName} numberHandler={handleNewNumber} addHandler={addPerson}/>
      <h2>Numbers</h2>
      <Numbers persons={personsToShow} deleteHandler={handleDeletePerson}/>
    </div>
  )
}

export default App