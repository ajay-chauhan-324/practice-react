import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : []
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

  
    addItem: (state, action) => {
      const exist = state.items.find(
        (item) => item.id === action.payload.id
      )

      if (exist) {
        exist.qty += 1
      } else {
        state.items.push({ ...action.payload, qty: 1 })
      }

      localStorage.setItem(
        "cart",
        JSON.stringify(state.items)
      )
    },

  
    removeItem: (state, action) => {
      const exist = state.items.find(
        (item) => item.id === action.payload
      )

      if (!exist) return

      if (exist.qty > 1) {
        exist.qty -= 1
      } else {
        state.items = state.items.filter(
          (item) => item.id !== action.payload
        )
      }

      localStorage.setItem(
        "cart",
        JSON.stringify(state.items)
      )
    }

  }
})

export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer