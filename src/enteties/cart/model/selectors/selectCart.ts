import { StateSchema } from "@/app/config/store/StateSchema";
import { CartState } from "../types/cartTypes";

export const selectCart = (state: StateSchema): CartState => state.cart;

export const selectCartItems = (state: StateSchema) => selectCart(state).items;

export const selectCartTotalPrice = (state: StateSchema) =>
  selectCart(state).items.reduce((total, item) => total + item.price, 0);
