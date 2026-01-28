import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  language:"en"
}

export const settingSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.value = action.payload
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { setLanguage } = settingSlice.actions

export default settingSlice.reducer