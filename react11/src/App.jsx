
import { useState } from 'react'
import './App.css'
import { useTodo } from './Context/TodoContext';

function App() {


const [text,setText] = useState("");

const {todo, addTodo , deleteTodo} = useTodo();

const handle = () => {

    if(text.trim() === "") return;
   
    addTodo(text);
    setText("");
}


  return (
    <>
    <div>
    <h1 className='bg-green-500 h-5 '>TO DO APP</h1>

    <br />

    <input className='border p-2 rounded' type="text" placeholder='write' value={text} onChange={(e)=>setText(e.target.value)} />
    <button className='border  bg-gray-300 hover:bg-gray-800  hover:text-white rounded p-2' onClick={handle}>Add</button>
    </div>

      <br />
    <ul>
      {todo.map((todo)=>(
        <li className='border text-black' key={todo.id}>{todo.text}  
        <button  onClick={()=>deleteTodo(todo.id)} className='border '>❌</button>
        </li>
      ))}
      
    </ul>
    </>
  )
}

export default App
