const Filter = (props) => {
    
    return (
        <div>
            <div>filter shown with <input value={props.filter} onChange={props.handler}/></div>
        </div>
    )
}

export default Filter