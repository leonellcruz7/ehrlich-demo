import { ProductTypes } from "@/components/shared/ProductCard/types";
import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

export interface CartRootState {
  cart: {
    cart: ProductTypes[];
  };
}
const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
