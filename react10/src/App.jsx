
import './App.css'

import { useWindowSize } from './hooks/useWindowSize'


function App() {

const {width ,height} = useWindowSize();
  return (
    <>
        <h1>screen size : {width}  * {height}</h1>
  
    </>
  )
}

export default App
