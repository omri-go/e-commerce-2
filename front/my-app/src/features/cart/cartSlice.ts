import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { CartItem } from "../../models/CartItem";
import { getAllCategories } from "./catsAPI";

export interface cartState {
  value: number;
  status: "idle" | "loading" | "failed";
  logged: boolean;
  cartItems: CartItem[];
}

const initialState: cartState = {
  value: 0,
  status: "idle",
  logged: false,
  cartItems: [],
};

export const categoriesAsync = createAsyncThunk("cart/cartUser", async () => {
  const response = await getAllCategories();
  return response.data;
});

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    buy: (state, action) => {
      console.log(action.payload);
      state.cartItems.push({ ...action.payload, amount: 1 });
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(categoriesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(categoriesAsync.fulfilled, (state, action) => {
        // console.log(action.payload.data);
        // state.cartItems = action.payload; //as Ctaegory[];
      });
  },
});

export const { buy } = cartSlice.actions;
export const selectCount = (state: RootState) => state.cart.value;
export const selectLogged = (state: RootState) => state.cart.logged;
export const selectCartItems = (state: RootState) => state.cart.cartItems;
export default cartSlice.reducer;
