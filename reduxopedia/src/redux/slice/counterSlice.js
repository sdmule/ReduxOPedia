import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 10 };

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  //in reducer, an action will be there
  reducers: {
    increment: (state) => {
      //here increment is an action
      state.count += 1;
    },
    decrement: (state) => {
      //here decrement is an action
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions; // Exported the actions
export const counterReducer = counterSlice.reducer; // Exported the reducer
