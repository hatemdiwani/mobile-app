import { createSlice } from "@reduxjs/toolkit"

const messageSlice = createSlice({
  name: "auth",
  initialState: {
    token: null
  },
  reducers: {}
})

export default messageSlice.reducer