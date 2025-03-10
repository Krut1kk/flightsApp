import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "../types/cartTypes";

const initialState: CartState = {
  items: JSON.parse(localStorage.getItem("cart") || "[]"),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },
    removeItem: (
      state,
      action: PayloadAction<{ flightId: string; seatId: string }>
    ) => {
      state.items = state.items.filter(
        (item) =>
          !(
            item.flightId === action.payload.flightId &&
            item.seatId === action.payload.seatId
          )
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
