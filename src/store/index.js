import { configureStore } from '@reduxjs/toolkit'
import settingSlice  from './settings/settingSlice'

export const store = configureStore({
  reducer: {
    settings: settingSlice
  },
})