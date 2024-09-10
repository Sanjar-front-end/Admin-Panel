import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface modeProps {
  mode: string;
}

const initialState: modeProps = {
  mode: sessionStorage.getItem("mode") == "dark" ? "dark" : "light",
}

export const ModeSlice = createSlice({
  name: 'Mode',
  initialState,
  reducers: {
    handleMode: (state, action: PayloadAction<string>) => {
      state.mode = action.payload;
    }
  },
})

export const { handleMode } = ModeSlice.actions

export default ModeSlice.reducer