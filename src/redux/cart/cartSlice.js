import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addToCart: (state, action) => {
      const findProuct = state.items.find(
        (item) => item.id == action.payload.id
      );

      if (!findProuct) {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    incQuantity: (state, action) => {
      const findProuct = state.items.find((item) => item.id == action.payload);

      if (findProuct) {
        findProuct.quantity += 1;
      }
    },

    decQuantity: (state, action) => {
      const findProuct = state.items.find((item) => item.id == action.payload);

      if (findProuct && findProuct.quantity > 1) {
        findProuct.quantity -= 1;
      }
    },
  },
});

export const { addToCart, incQuantity, decQuantity } = cartSlice.actions;
export default cartSlice.reducer;
