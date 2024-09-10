import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface updownProps {
    num: number;
    updownChosen: boolean;
    updown1?: boolean;
    updown2?: boolean;
    updown3?: boolean;
    updown4?: boolean;
    updown5?: boolean;
    updown6?: boolean;
}

export interface updownState {
    updown: updownProps
}

const initialState: updownState = {
    updown: {
        num: 0,
        updownChosen: false,
        updown1: localStorage.getItem("updown1") == "true" ? true : false,
        updown2: localStorage.getItem("updown2") == "true" ? true : false,
        updown3: localStorage.getItem("updown3") == "true" ? true : false,
        updown4: localStorage.getItem("updown4") == "true" ? true : false,
        updown5: localStorage.getItem("updown5") == "true" ? true : false,
        updown6: localStorage.getItem("updown6") == "true" ? true : false,
    }
}

export const UpdownSlice = createSlice({
    name: 'Updown',
    initialState,
    reducers: {
        handleUpdown: (state, action: PayloadAction<updownProps>) => {
            switch (action.payload.num) {
                case 1:
                    state.updown.updown1 = action.payload.updownChosen;
                    break;
                case 2:
                    state.updown.updown2 = action.payload.updownChosen;
                    break;
                case 3:
                    state.updown.updown3 = action.payload.updownChosen;
                    break;
                case 4:
                    state.updown.updown4 = action.payload.updownChosen;
                    break;
                case 5:
                    state.updown.updown5 = action.payload.updownChosen;
                    break;
                case 6:
                    state.updown.updown6 = action.payload.updownChosen;
                    break;
            }
        }
    },
})

export const { handleUpdown } = UpdownSlice.actions

export default UpdownSlice.reducer