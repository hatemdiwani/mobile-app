import { createSlice } from "@reduxjs/toolkit"

const messageSlice = createSlice({
  name: "auth",
  initialState: {
    message: "Initial message"
  },
  reducers: {}
})

export default messageSlice.reducer