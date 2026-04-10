import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



 export const fetchproduct = createAsyncThunk('products',async()=>{
    const resp = await fetch('https://dummyjson.com/products');
    const jsonresp =await resp.json();
    console.log(jsonresp.products);
    return jsonresp.products
})

const initialState={
    items:[],
    status:undefined,
    error:null
}
const productsSlice = createSlice({
    name:'productSlice',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchproduct.fulfilled,(state,action)=>{
            state.status="succeeded",
            state.items=action.payload
            console.log(state.items);
        }
        )
    }
})


export default productsSlice.reducer