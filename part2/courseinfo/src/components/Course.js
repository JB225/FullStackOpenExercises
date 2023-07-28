const Course = (props) => {
    return (
      <div>
        <Header title={props.course.name}/>
        <Content parts={props.course.parts}/>
      </div>
    )
  }
  
  const Header = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
      </div>
    )
  }
  
  const Content = (props) => {
    const {parts} = props
    const total = parts.reduce((accumulator, current) => accumulator + current.exercises, 0)
  
    return (
      <div>
        {parts.map(part => <Part key={part.id} id={part.id} name={part.name} exercises={part.exercises} />)}
        <b>total of {total} exercises</b>
      </div>
    )
  }
  
  const Part = (props) => {
    return (
      <div>
        <p key={props.id}>{props.name} {props.exercises}</p>
      </div>
    )
  }

  export default Course