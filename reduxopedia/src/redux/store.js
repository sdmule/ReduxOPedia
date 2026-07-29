import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice/counterSlice";

export const store = configureStore({
  // The reducers which we will create in slices those will be imported here
  reducer: {
    counter: counterReducer,
  },
});
