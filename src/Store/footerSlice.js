import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {
    storeFooter(state, action) {
      const data = action.payload;
      
      return action.payload;
    },
  },
});

export const footerActions = footerSlice.actions;

export default footerSlice.reducer;
