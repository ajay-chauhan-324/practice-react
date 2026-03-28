import { useState } from 'react'
import './App.css'
import Prac from './Prac';
import Form from './Form';

function App() {

  const [color, setColor] = useState("red");
  console.log('this function is called', color);
  return (
    <>
      <Prac />

      <Form />
       <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>
  );
}

export default App
