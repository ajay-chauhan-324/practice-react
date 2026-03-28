import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
   const [countm, setCountm] = useState("");
   

  const textchange = (e) => {

   const text= e.target.value;
   
  //  setCount(text.length);
   

      if(text.length<=50)
// {      setCount(prev => prev +1)
    {  setCount(text.length);}
      else{
        setCountm("limited charcters enters only")
      }


  }

  return (
    <>
     <h1> charcter counter</h1>

      <label htmlFor="">typeHERE:</label><input maxLength={50} type="text" onChange={textchange} />

      <h4>COUNTING  : {count}  {count > 44 ? <h2 style={{color : "red"}}> limit near {count} </h2>:count - 50 + "remeaining"}</h4>

      

      <p  style={{color:"red"}}>{countm}</p>
    </>
  )
}

export default App
