import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "../redux/feature/header/headerSlice";

const store = configureStore({
  reducer: {
    header: headerReducer,
  },
});

export default store;
