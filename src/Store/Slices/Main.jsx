import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentMode : window.localStorage.getItem("status") || window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

export const main = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setColor : (state, action) => {
      state.currentMode = action.payload
      document.documentElement.classList.add(action.payload)
      window.localStorage.setItem("status" , action.payload )
      console.log(action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { setColor } = main.actions

export default main.reducer