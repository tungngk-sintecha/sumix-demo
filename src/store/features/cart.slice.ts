import { ICart } from "@/core/interface/cart";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "..";

interface CartSliceProps {
  cart: ICart[];
}

const initialState: CartSliceProps = {
  cart: [],
};

const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addToCart: (state, action: PayloadAction<ICart>) => {
      state.cart.push(action.payload);
    },
  },
});

export const useCartSlice = () =>
  useAppSelector((state) => {
    return state.cart;
  });

export const CartReducer = CartSlice.reducer;
export const { addToCart } = CartSlice.actions;
