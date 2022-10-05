import { createSlice } from "@reduxjs/toolkit"

const messageSlice = createSlice({
  name: "auth",
  initialState: {
    t: "Initial message"
  },
  reducers: {}
})

export default messageSlice.reducer