import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const findProduct = state.items.find((x) => x.id == action.payload.id);

      if (!findProduct) {
        state.items.push(action.payload);
      }
    },
    removeWish: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeWish } = wishSlice.actions;
export default wishSlice.reducer;
