import { configureStore } from '@reduxjs/toolkit'
import updown from '../reducers/updown'
import ModeChanger from '../reducers/ModeChanger'
import Collapsed1 from '../reducers/Collapsed1'


export const store = configureStore({
  reducer: {
    Updown: updown,
    Mode: ModeChanger,
    Collapsed1: Collapsed1
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch