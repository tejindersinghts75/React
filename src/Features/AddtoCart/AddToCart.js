import { createSlice } from "@reduxjs/toolkit";
export const todoSlice = createSlice({
    name: "addToCart",
    initialState: {
        cart: [],
        totalPrice: [],
        loginToken:false,
        valueRange : {sliderValue:"",inputValue:"" },
    },
    reducers: {

        addToCart: (state, action) => {

            const { id, price } = action.payload

            const itemCart = state.cart.find((item) => item.id === id)
            if (itemCart) {
                itemCart.quantity++;
                itemCart.totalPerQty = itemCart.quantity * price
            }
            else {
                state.cart.push({ ...action.payload, quantity: 1, totalPerQty: price })
            }
        },
        loginL:(state,action)=>{
            state.loginToken = action.payload
        },
        rangeSlider:(state, action)=>
        {
            state.valueRange = action.payload
        }
    },
});
export const { addToCart,loginL,rangeSlider } = todoSlice.actions
export default todoSlice.reducer
