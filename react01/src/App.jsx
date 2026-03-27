import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)


 let add_values = ()=>{
  if(count<20){
  setCount(count+1)}
 
 }
 let remove_values =() => {
  if(count>=1)
  setCount(count-1)
 }

  return (
    <>
    <h1>
      COUNTER : {count}

    </h1>
    <button onClick={add_values}>ADD VALUES</button>
    <br />

    <button onClick={remove_values}>REMOVE VALUES</button>
   </>
  )
}

export default App
