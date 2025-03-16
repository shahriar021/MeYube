import { createSlice } from "@reduxjs/toolkit";

const searchSLice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacaheResults: (state, action) => {
      state = Object.assign(state, action.payload);
    }
  }
});

export const { cacaheResults } = searchSLice.actions;

export default searchSLice.reducer;
