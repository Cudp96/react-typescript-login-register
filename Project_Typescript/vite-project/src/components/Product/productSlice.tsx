import { createSlice } from "@reduxjs/toolkit";

const initialState:any =[];

const productSlice = createSlice ({
    name: 'product',
    initialState,
    reducers: {
        add:(state,action)=>{
            state.push(action.payload);
        },
        remove:(state,action)=>{
            return state.filter((item:any) => item.id !== action.payload);
        },
    }
})

export const {add,remove} = productSlice.actions;
export default productSlice.reducer;