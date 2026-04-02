import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyinfo from './hooks/useCurrencyinfo'
function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const currencyInfo = useCurrencyinfo(from);

  const options = Object.keys(currencyInfo);

  const convertedAmount = currencyInfo[to]
    ? amount * currencyInfo[to]
    : 0;

  return (
    <>
  
      <div className="flex justify-center ">

      <div className="">
        <h1>Currency Converter</h1>

        <input type="number"
         value={amount}
         onChange={(e)=>setAmount(e.target.value)}/>

         <select name="" id="" value={from} onChange={(e)=>setFrom(e.target.value)}>
          {options.map((curr)=>(
            <option key={curr} value={curr}>
              {curr.toUpperCase()}
            </option>
          ))}
         </select>

         <h2>
          {amount} {from.toUpperCase()} = { " "}
          {convertedAmount.toFixed(2)} {to.toUpperCase()}
         </h2>
      </div>
      </div>

  
    </>
  )
}

export default App
