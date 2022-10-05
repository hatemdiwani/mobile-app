import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    total : 0
  },
  reducers: {
    setToken : (state ,action) => {
        state.token = action.payload.token
    },
    addProductToCart : 
  }
})

export const { setToken } = authSlice.actions

export default authSlice.reducer