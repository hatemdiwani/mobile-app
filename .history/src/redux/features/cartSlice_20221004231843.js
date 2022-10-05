import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
  name: "cart",
  initialState: {
    products: null
  },
  reducers: {
    setToken : (state ,action) => {
        state.token = action.payload.token
    }
  }
})

export const { setToken } = authSlice.actions

export default authSlice.reducer