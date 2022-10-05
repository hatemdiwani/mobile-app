import { createSlice } from "@reduxjs/toolkit"

const messageSlice = createSlice({
  name: "auth",
  initialState: {
    token: "Initial message"
  },
  reducers: {}
})

export default messageSlice.reducer