// Course component
const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    )
}


// Header component
const Header = ({ course }) => {
    return (<h1>{course.name}</h1>)
}

// Part component
const Part = ({ part, exercises }) => {
    return (<p>{part} {exercises}</p>)
}

// Content component
const Content = ({ course }) => {
    return (
        <div>
            {course.parts.map(part => (
                <Part
                    key={part.id}
                    part={part.name}
                    exercises={part.exercises}
                />
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

export default Course