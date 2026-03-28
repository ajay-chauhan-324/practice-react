import React from 'react'
import { useState } from 'react'

function Prac() {

    const [text,setText]=useState("a");

  return (
    <div>
            <input type="text"
            onChange={(e)=>setText(e.target.value)}
            
            />
            <p>you typed: {text}</p>

      
    </div>
  )
}

export default Prac
