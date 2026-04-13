import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../RTK/slice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

const dispatch = useDispatch();
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-6 text-gray-800">🛒 Your Cart</h2>

      {/* Empty State */}
      {cartItems?.length === 0 && (
        <div className="text-center py-20">
          <h3 className="text-xl text-gray-500">Your cart is empty 😢</h3>
        </div>
      )}

      {/* Cart Items */}
      <div className="flex flex-col gap-6">
        {cartItems?.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-center justify-between bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
          >
            {/* Left - Image + Info */}
            <div className="flex items-center gap-4 w-full sm:w-1/2">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-lg"
              />

              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-500">{item.brand}</p>
              </div>
            </div>

            {/* Right - Price + Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 sm:mt-0">
              {/* Price */}
              <h2 className="text-lg font-bold text-blue-600">₹{item.price}</h2>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2 border rounded-lg px-2 py-1">
                <button onClick={()=>dispatch(removeItem(item.id))} className="px-2 text-lg font-bold">-</button>
                <span className="px-2">{item.qty || 1}</span>
                <button onClick={()=>dispatch(addItem(item))} className="px-2 text-lg font-bold">+</button>
              </div>

             
            </div>
          </div>
        ))}
        <div className="mt-8 text-right">
          <h2 className="text-xl font-bold">
            Total: ₹
            {cartItems.reduce(
              (sum, item) => sum + item.price * (item.qty || 1),
              0
            )}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Cart;
