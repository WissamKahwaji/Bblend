import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const collectionsSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {
    storeCollections(state, action) {
      const { first, second, third, fourth } = action.payload;
      return [...state, first, second, third, fourth];
    },
  },
});

export const collectionsActions = collectionsSlice.actions;

export default collectionsSlice.reducer;
