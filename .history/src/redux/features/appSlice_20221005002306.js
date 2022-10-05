import { createSlice } from "@reduxjs/toolkit"

const appSlice = createSlice({
  name: "app",
  initialState: {
    searchBar : {
        keyword : ''
    }
  },
  reducers: {
    set : (state ,action) => {
        state.token = action.payload.token
    }
  }
})

export const { setToken } = appSlice.actions

export default appSlice.reducer