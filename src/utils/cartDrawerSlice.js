import { createSlice } from "@reduxjs/toolkit";

const cartDrawerSlice = createSlice({
  name: "cartDrawer",
  initialState: {
    isCartDrawerOpen: false,
  },
  reducers: {
    openCartDrawer(state) {
      state.isCartDrawerOpen = true;
    },
    closeCartDrawer(state) {
      state.isCartDrawerOpen = false;
    },
  },
});

export const { openCartDrawer, closeCartDrawer } = cartDrawerSlice.actions;
export default cartDrawerSlice.reducer;
