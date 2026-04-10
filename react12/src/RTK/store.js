
import {configureStore} from "@reduxjs/toolkit"
import cartReducer from './slice'
import productsReducer from './prSlice'
const store = configureStore(
    {
        reducer:{
                cart:cartReducer,
                product:productsReducer,
        }
    }
)

export default store;