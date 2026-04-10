import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
const cartSelector = useSelector((state)=>state.cart.items)
console.log( "comment" ,cartSelector)
  return (
    <div>
      <div className="">
        <h2>Items your cart </h2>
      </div>
      {
        cartSelector.length>0 ? cartSelector.map((item=>(
            <div key={item.id} className="">
                    <div className="">
                        <img src={item.thumbnail} alt="img" />
                        <div>
                            <h4>{item.title}</h4>
                            <h3>{item.brand}</h3>
                        </div>
                        <div>
                                  <h2>{item.price} </h2>
                                  <button >Remove </button>
                            
                                  <span> quentity</span>
                                  <button> add more</button>
                        </div>
                    </div>
            </div>
        )))
        : null 
      }
    </div>
  )
}

export default Cart
