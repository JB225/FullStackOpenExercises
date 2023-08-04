const Numbers = ({persons, deleteHandler}) => {
    return (
        <div>
            {persons.map(person =>
                <div key={person.id}>
                    {person.name} {person.number} {}
                    <button onClick={() => deleteHandler(person.name, person.id)}>Delete</button>
                </div>)}
        </div>
    )
}

export default Numbers