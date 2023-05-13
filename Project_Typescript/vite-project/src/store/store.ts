import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../components/counter/counterSlice";
import loginSlice  from "../Pages/Login/loginSlice";
import productSlice from "../components/Product/productSlice";

export const store = configureStore({
    reducer:{
         counter: counterSlice,
         login: loginSlice,
         product: productSlice,
    }
})


