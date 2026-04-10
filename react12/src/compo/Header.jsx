import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Header() {
  const [open, setOpen] = useState(false);
  const cartCount = useSelector((state) => state.cart.items);
  console.log(cartCount )

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">

          <div className="flex items-center gap-2">
            <img
              src="/white.svg"
              alt="logo"
              className="h-10 w-auto object-contain"
            />
            <h1 className="text-lg font-bold">MyStore</h1>
          </div>

          <div className="hidden md:flex items-center gap-6">
         
            <Link to="/" className="hover:text-blue-500 transition">Home</Link>
            <Link to="/About" className="hover:text-blue-500 transition">About</Link>
            <Link to="/Services" className="hover:text-blue-500 transition">Services</Link>
       

            <Link to="/cart" >
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              🛒 Cart ({cartCount.length>0 ? cartCount.length : 0})
            </button>
            </Link>
          </div>

    
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? "✖" : "☰"}
          </button>
        </div>
      </nav>


      {open && (
        <div className="md:hidden bg-white px-6 pb-4 shadow-md">

               <Link to="/" className="block py-2">Home</Link>
            <Link to="/About" className="block py-2">About</Link>
            <Link to="/Services" className="block py-2">Services</Link>
       

            <Link to="/cart" >
            <button className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg">
              🛒 Cart ({cartCount.length>0 ? cartCount.length : 0})
            </button>
            </Link>

        </div>
      )}

    </header>
  );
}

export default Header;