import { createSlice } from "@reduxjs/toolkit"

const appSlice = createSlice({
  name: "app",
  initialState: {
    searchBar : {
        keyword : ''
    }
  },
  reducers: {
    setKeyword : (state ,action) => {
        state.searchBar.keyword = action.payload.keyword
    }
  }
})

export const { setToken } = appSlice.actions

export default appSlice.reducer