const Header = (props) => {
  console.log(props,"header");
  return (
    <div>
      <h1>{props.course}</h1>
    </div>

  )
}
const Part = (props) => {
  console.log(props,"part");
   return (
     <div>
       <p>Name: {props.name}. Number of exercises: {props.exercises}.</p>
     </div>
   )
 
 }
const Content = (props) => {
  console.log(props,"content");
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
  const course = 'Half Stack application development';
  const parts = [
    {
    name: 'Fundamentals of React',
    exercises: 10,
  },
 {

    name: 'Using props to pass data',
    exercises: 7,
  },
{
    name: 'State of a component',
    exercises: 14,
  },
  ]
  return (
    <div>
      <Header course={course} />
      <Content 
      parts1= {parts[0].name} exercises1={parts[0].exercises}
      parts2= {parts[1].name} exercises2={parts[1].exercises}
      parts3= {parts[2].name} exercises3={parts[2].exercises}/>
      
      <Total exercises={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  )
}

export default App
