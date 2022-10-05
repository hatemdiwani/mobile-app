import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        total: 0
    },
    reducers: {
      
        addProductToCart: (state, action) => {
            state.products.push(action.payload.product)
            state.total += action.payload.product.price
        },
        removeFromCart: (state, action) => {
            const products = [...state.products]
            const filtred = products.filter(p => p.id !== action.payload.product.id)
            state.products = filtred
            state.total = state.total - action.payload.product.price
        }
    }
})

export const {  addProductToCart ,removeFromCart } = cartSlice.actions

export default cartSlice.reducer