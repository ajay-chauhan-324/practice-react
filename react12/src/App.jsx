
import './App.css'
import Header from './compo/header'
import Footer from './compo/Footer'

import Products from './compo/Products'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './compo/Cart'

function App() {

  return (
   <>

    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={ <Products />} />
      <Route path='/cart' element={ <Cart />} />
 \
   </Routes>
   <Footer />
   </BrowserRouter>

   </>
  )
}

export default App
