import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  products: [],
};

const categoryThreeSlice = createSlice({
  name: "categoryThree",
  initialState,
  reducers: {
    storeCategoryThree(state, action) {
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

export const categoryThreeActions = categoryThreeSlice.actions;

export default categoryThreeSlice.reducer;
