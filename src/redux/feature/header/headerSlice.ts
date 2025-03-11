import { createSlice } from "@reduxjs/toolkit";

export const headerSlice = createSlice({
  name: "header",
  initialState: {
    toggleToBody: true
  },
  reducers: {
    toggleToOpenSideBar: (state) => {
      state.toggleToBody = !state.toggleToBody;
    },
    closeSidebar: (state) => {
      state.toggleToBody = false;
    }
  }
});

export const { toggleToOpenSideBar, closeSidebar } = headerSlice.actions;

export default headerSlice.reducer;
