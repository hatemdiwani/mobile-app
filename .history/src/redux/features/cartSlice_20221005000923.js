import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        total: 0
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload.token
        },
        addProductToCart: (state, action) => {
            state.products.push(action.payload.product)
            state.total += action.payload.product.price
        },
        removeFromCart : (state , action) => {
            const products = [...state.products]
            const filtred = products.filter( p=> p.id !== action.payload.product.id )
            state.products = filtred
            state.total = 
        }
    }
})

export const { setToken, addProductToCart } = authSlice.actions

export default authSlice.reducer