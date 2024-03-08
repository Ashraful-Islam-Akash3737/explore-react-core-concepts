
import './App.css'
import Todo from './Components/Todo'

function App() {


  return (
    <>
      
      <h1>Vite + React</h1>
      {/* <Device DeviceName='laptop'></Device>
      <Device DeviceName='mobile'></Device>
      <Device DeviceName='watch'></Device> */}
      <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="CoreConcepts" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo>
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
