import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [joke, setSetjoke] = useState("")
    const [loading, setLoading] = useState(false)
      const [error, setError] = useState("")


      const fetchjoke = async () => {
        setLoading(true);
        setError("");

        try{
          const res = await fetch("https://api.chucknorris.io/jokes/random");
          const data = await res.json();
          setSetjoke(data.value);

        } catch(err){
          setError("failed to fetch "
          );

        }finally{
          setLoading(false);
        }
      }

      useEffect(()=>{
        fetchjoke();
      },[]);


  return (
    <>
        <div className="">

            <h1>JOKES TIME-PASS</h1>


            <p>{joke}</p>

            <button onClick={fetchjoke}>Get new joke</button>


        </div>
    </>
  )
}

export default App
