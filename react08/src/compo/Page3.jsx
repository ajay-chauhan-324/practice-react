import React, { useContext, useState } from 'react'
import {ThemeContext} from '../context/Theme'


function Page3() {
    const {theme , setTheme} =useContext(ThemeContext);
  return (
    <div style={ { background : theme === "dark" ? "#222" : "#eee" ,
      color: theme === "dark" ? "#fff" : "#000"}}>
        <h1>Page3</h1>


        <button onClick={()=>{
            setTheme(theme === "light" ? "dark" : "light")
        }}>button</button>
    </div>
  )
}

export default Page3
