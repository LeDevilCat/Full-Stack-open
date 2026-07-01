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

/*
// Total component
const Total = (props) => {
  console.log(props)

  return (
    <p>
      Number of exercises{" "}
      {
        props.course.parts[0].exercises +
        props.course.parts[1].exercises +
        props.course.parts[2].exercises
      }
    </p>
  )
}
*/


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
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App