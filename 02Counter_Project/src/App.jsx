import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,temp] = useState(15)


 const removeValue = () => {
   temp(counter - 1)
}

  const addValue=()=>{
   
    temp(counter+1)
     }

  
  

  
  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Countervalue:{counter}</h2>
    <button onClick={addValue}>Add</button>
     <br/> <br/> 
     <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
