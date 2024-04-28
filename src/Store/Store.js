import { configureStore } from "@reduxjs/toolkit";
import todoSlice from '../Features/AddtoCart/AddToCart'

export const store = configureStore({
    reducer : {
        todoSlice:todoSlice
    },
})