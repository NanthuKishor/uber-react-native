import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./src/slice/navSlice";

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});
