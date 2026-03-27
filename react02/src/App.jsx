import { useState } from 'react'

import './App.css'

function App() {

  const [color ,setcolor]=useState("white")

 
  


  return (
    <>
    <div className="w-full h-screen" style={{backgroundColor:color}}>
      <div className="bg-green-400 flex gap-3 justify-center ">
        <h4 className='bg-red-400 rounded p-1 m-2 hover:bg-green-900' onClick={() => setcolor("red")}>RED</h4>
        <h4 className='bg-blue-400 rounded p-1 m-2 hover:bg-green-900'  onClick={() => setcolor("blue")}>BLUE</h4>
        <h4 className='bg-green-400 rounded p-1 m-2 hover:bg-green-900'  onClick={() => setcolor("green")}>GREEN</h4>
        <h4 classNam='bg-green  rounded p-1 m-2 hover:bg-green-900'  onClick={() => setcolor("red")}>PURPULE</h4>
        <h4 className='bg-gray-400 rounded p-1 m-2 hover:bg-green-900'  onClick={() => setcolor("gray")}>GRAY</h4>
        <h4 className='bg-yellow-400 rounded p-1 m-2 hover:bg-green-900'  onClick={() => setcolor("yellow")}>YELLLOW</h4>

      </div>
      </div>
 
    </>
  )
}

export default App
