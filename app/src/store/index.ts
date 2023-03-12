import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import movieSlice from "./features/movieSlice";

const store = configureStore({
  //合并多个slice
  reducer: {
    counter: counterSlice,
    movie: movieSlice,
  },
});

export default store;
