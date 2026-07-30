import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice/counterSlice";

export const store = configureStore({
  // The reducers which we will create in slices those will be imported here
  reducer: {
    counterStore: counterReducer,
  },
});

// console.log(store.getState());  ---> This will be used to see the reducer state using getState() method from store
//console.log(store.dispatch);
// There is also another called as dispatch which will be used to invoke the actions
