import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  products: [],
};

const categoryOneSlice = createSlice({
  name: "categoryOne",
  initialState,
  reducers: {
    storeCategoryOne(state, action) {
      const { title, products: productObject } = action.payload;

      // Convert the productObject into an array of products
      const products = Object.keys(productObject).map((key) => ({
        ...productObject[key],
        id: key, // Optional: Add a unique identifier if needed
      }));

      // Update the state with the new category data
      state.title = title;
      state.products = products;
    },
  },
});

export const categoryOneActions = categoryOneSlice.actions;

export default categoryOneSlice.reducer;
