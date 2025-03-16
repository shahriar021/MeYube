import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "../redux/feature/header/headerSlice";
import searchReducer from "../redux/feature/header/searchSlice";

const store = configureStore({
  reducer: {
    header: headerReducer,
    search: searchReducer
  }
});

export default store;
