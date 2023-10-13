import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Products",
    path: "/Products",
  },
  {
    title: "About Us",
    path: "/About_Us",
  },
  {
    title: "Contact Us",
    path: "/contact_us",
  },
  {
    title: "My Orders",
    path: "/my_orders",
  },
];

const navLinksSlice = createSlice({
  name: "navLinks",
  initialState,
  reducers: {
    storeNavLinks(state, action) {
      const { first, second, third, fourth } = action.payload;

      // Create new objects for the items to be added
      const newItems = [
        {
          title: first,
          path: `/extra_1`,
        },
        {
          title: second,
          path: `/extra_2`,
        },
        {
          title: third,
          path: `/extra_3`,
        },
        {
          title: fourth,
          path: "/extra_4",
        },
      ];
      // Push the new items to the end of the state array
      state.push(...newItems);
    },
  },
});

export const navLinksActions = navLinksSlice.actions;

export default navLinksSlice.reducer;
