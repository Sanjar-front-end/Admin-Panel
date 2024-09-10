// import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

// export interface icon_colorProps {
//     1: boolean;
//     2: boolean;
//     3: boolean;
//     4: boolean;
//     5: boolean;
//     6: boolean;
//     7: boolean;
//     8: boolean;
//     9: boolean;
//     10: boolean;
//     11: boolean;
//     12: boolean;
//     13: boolean;
//     14: boolean;
//     15: boolean;
//     16: boolean;
//     17: boolean;
//     18: boolean;
//     19: boolean;
//     20: boolean;
//     21: boolean;
//     22: boolean;
//     23: boolean;
//     24: boolean;
//     25: boolean;
//     26: boolean;
//     27: boolean;
//     28: boolean;
//     29: boolean;
//     30: boolean;
//     31: boolean;
//     32: boolean;
//     33: boolean;
//     34: boolean;
//     35: boolean;
//     36: boolean;
//     37: boolean;
//     38: boolean;
//     39: boolean;
//     40: boolean;
// }

// export interface icon_colorState {
//     icon_color: icon_colorProps
// }

// const initialState: icon_colorState = {
//     icon_color: {
//         1: false,
//         2: false,
//         3: false,
//         4: false,
//         5: false,
//         6: false,
//         7: false,
//         8: false,
//         9: false,
//         10: false,
//         11: false,
//         12: false,
//         13: false,
//         14: false,
//         15: false,
//         16: false,
//         17: false,
//         18: false,
//         19: false,
//         20: false,
//         21: false,
//         22: false,
//         23: false,
//         24: false,
//         25: false,
//         26: false,
//         27: false,
//         28: false,
//         29: false,
//         30: false,
//         31: false,
//         32: false,
//         33: false,
//         34: false,
//         35: false,
//         36: false,
//         37: false,
//         38: false,
//         39: false,
//         40: false
//     }
// }

// export const Icon_colorSlice = createSlice({
//     name: 'Icon_color',
//     initialState,
//     reducers: {
//         handleIcon_color: (state, action: PayloadAction<string>) => {
//             for (let l = 1; l < 41; l++) {
//                 if (state.icon_color[l] == action.payload) {
//                     state.icon_color[l] = true;
//                 }
//             }
//         },
//     })

// export const { handleIcon_color } = Icon_colorSlice.actions

// export default Icon_colorSlice.reducer