// Course component
const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
    </div>
  )
}


// Header component
const Header = ({ course }) => {
  return (<h1>{course.name}</h1>)
}

// Part component
const Part = (props) => {
  console.log(props)

  return (
    <p>{props.part} {props.exercises}</p>
  )
}


// Content component
const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map(part => (
        <Part key={part.id} part={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}

// Total component
const Total = ({ course }) => {
  return (
    <p style={{ fontWeight: '800' }}>
      Number of exercises {course.parts.reduce((sum, part) => sum + part.exercises, 0)}
    </p>
  )
}

// App component
const App = () => {
  const course = {
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
  }

  return (
    <div>
      <Course course={course} />
      <Total course={course} />
    </div>
  )
}

export default App