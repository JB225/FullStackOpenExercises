// split in to separate module
// fix issue with unique keys

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return courses.map(course => <Course key={course.id} course={course} />)
}

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
      {parts.map(part => <Part id={part.id} name={part.name} exercises={part.exercises} />)}
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

export default App
