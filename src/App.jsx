
import './App.css'
import Actor from './Components/Actor'
import Singer from './Components/Singer';
// import Todo from './Components/Todo'

function App() {

  const actors = ["akash", "shajib", "tipu", "sayem"];
  const singers = [
    {name: "singer1", age: 12},
    {name: "singer2", age: 32},
    {name: "singer3", age: 22},
    {name: "singer4", age: 42},
  ]

  return (
    <>
      
      <h1>Vite + React</h1>
      {/* name={singer.name} age={singer.age} */}
      {
        singers.map(singer=><Singer singer={singer}></Singer>)
      }

      {/* <Device DeviceName='laptop'></Device>
      <Device DeviceName='mobile'></Device>
      <Device DeviceName='watch'></Device> */}

      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="CoreConcepts" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}

      {
        actors.map((item) =><Actor name={item} key={item.key} ></Actor>)
      }
    </>
  )
}
// function Device({DeviceName}){
//   return(
//     <div>
//       <h3>This is:{DeviceName}</h3>
//     </div>
//   )
// }

export default App
