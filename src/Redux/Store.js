/* our create stoer etakes couple of 
arguments first one is reducers the other are the middlewares like
redux-thunk, redux-saga etc... currently we are not using any middleware
so nithing will be written there */

import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers/Index2";

const store = configureStore({
  reducer: reducers, // Pass the combined reducers here
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development
});

export default store;