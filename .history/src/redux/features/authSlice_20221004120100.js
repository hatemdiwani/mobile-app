import { createSlice } from "@reduxjs/toolkit"

const messageSlice = createSlice({
  name: "auth",
  initialState: {
    token: null
  },
  reducers: {
    setToken : (state ,action) => {
        state.token = action.payload.token
    }
  }
})

export const {  } = 

export default messageSlice.reducer