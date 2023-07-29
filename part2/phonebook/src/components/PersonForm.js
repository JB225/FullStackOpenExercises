const PersonForm = (props) => {
    return (
        <div>
        <form>
            <div>name: <input value={props.name} onChange={props.nameHandler} /> </div>
            <div>number: <input value={props.number} onChange={props.numberHandler}/> </div>
            <div> <button type="submit" onClick={props.addHandler}>add</button> </div>
        </form>
        </div>
    )
}

export default PersonForm