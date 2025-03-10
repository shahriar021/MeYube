import { createSlice } from "@reduxjs/toolkit";

export const headerSlice = createSlice({
  name: "header",
  initialState: {
    toggleToBody: true,
  },
  reducers: {
    toggleToOpenSideBar: (state) => {
      state.toggleToBody = !state.toggleToBody;
    },
  },
});

export const { toggleToOpenSideBar } = headerSlice.actions;

export default headerSlice.reducer;
