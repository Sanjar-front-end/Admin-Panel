import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface collapsed1Props {
  collapsed1: boolean;
}

const initialState: collapsed1Props = {
  collapsed1: localStorage.getItem("collapsed") == "true" ? false : true
}

export const Collapsed1Slice = createSlice({
  name: 'Collapsed1',
  initialState,
  reducers: {
    handleCollapsed1: (state, action: PayloadAction<boolean>) => {
      state.collapsed1 = action.payload;
    }
  },
})

export const { handleCollapsed1 } = Collapsed1Slice.actions

export default Collapsed1Slice.reducer