
import React from 'react'
import {useEffect } from 'react'
import {fetchproduct} from "../RTK/prSlice"
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../RTK/slice';
 function Products() {

const dispatch = useDispatch();
useEffect(() => {
   dispatch( fetchproduct());
}, [])
const cartCount = useSelector((state) => state.cart.items);
const prselector = useSelector((state)=>state.product.items)
console.log(prselector)
  return (
  <div className="max-w-7xl mx-auto px-4 py-8">

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

    {
      prselector && prselector.length > 0 ? (
        prselector.map((item) => (

          <div 
            key={item.id} 
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
          >

            {/* Image */}
            <div className="h-48 w-full overflow-hidden">
              <img 
                src={item.thumbnail} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col justify-between h-[220px]">

              {/* Title */}
              <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
                {item.title}
              </h2>

              {/* Description */}
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                {item.description}
              </p>

              {/* Price + Button */}
              <div className="flex items-center justify-between mt-4">

                <span className="text-lg font-bold text-blue-600">
                  ₹{item.price}
                </span>
                {
                    cartCount.find(cartitem =>cartitem.id === item.id) 
                    ?
                                    <button 
                                    onClick={() => dispatch(removeItem(item))}
                                    className=" bg-red-500  hover:bg-red-700 text-white px-3 py-1 rounded-lg  transition">
                                    Remove From Cart
                                  </button> 
                    : 
                         <button onClick={() => dispatch(addItem(item))} 
                                    className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition">
                                    Add
                                  </button> 
                }


              </div>

            </div>

          </div>

        ))
      ) : (
        <h2 className="text-center col-span-full text-gray-500">
          No products found
        </h2>
      )
    }

  </div>

</div>
  )
}

export default Products
