const Header = (props) => {
  console.log(props, "header");
  return (
    <div>
      <h1>{props.course}</h1>
    </div>

  )
}
const Part = (props) => {
  console.log(props, "part");
  return (
    <div>
      <p> Name: {props.name}. Number of exercises: {props.exercises}.</p>
    </div>
  )

}
const Content = (props) => {
  console.log(props, "content");
  return (
    <div>
      <Part name={props.parts1} exercises={props.exercises1} />
      <Part name={props.parts2} exercises={props.exercises2} />
      <Part name={props.parts3} exercises={props.exercises3} />
    </div>
  )
}

const Total = (props) => {
  console.log(props, "total");
  return (
    <div>
      <p>Total amount of exercises is {props.exercises}</p>
    </div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content
        parts1={course.parts[0].name} exercises1={course.parts[0].exercises}
        parts2={course.parts[1].name} exercises2={course.parts[1].exercises}
        parts3={course.parts[2].name} exercises3={course.parts[2].exercises} />

      <Total exercises={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

export default App
