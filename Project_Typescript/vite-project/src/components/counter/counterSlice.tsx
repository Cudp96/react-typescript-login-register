import {createSlice} from '@reduxjs/toolkit'
import { CountStateInterface } from '../../interface/global.interface';

const initialState: CountStateInterface = {
    count: 0,
    arr: [],
};

export const counterSlice:any = createSlice ({
    name: 'Counter',
    initialState,
    reducers: {
        increment: (state)=>{
            state.count += 1;
        },
        decrement: (state)=>{
            state.count -= 1;
        },
        reset: (state)=>{
            state.count = 0;
        }
    }
})

export const {increment, decrement, reset} = counterSlice.actions;

export default counterSlice.reducer;