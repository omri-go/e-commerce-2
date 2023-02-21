import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { Product } from "../../models/Product";
import { getProducts } from "./prodsAPI";

export interface productState {
  value: number;
  status: "idle" | "loading" | "failed";
  products: Product[];
}

const initialState: productState = {
  value: 0,
  status: "idle",
  products: [],
};

export const productsAsync = createAsyncThunk(
  "prods/prodsUser",
  async (catId: number) => {
    const response = await getProducts(catId);
    return response.data;
  }
);

export const prodsSlice = createSlice({
  name: "prods",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(productsAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        state.products = action.payload; //as Ctaegory[];
      });
  },
});

export const {} = prodsSlice.actions;
export const selectCount = (state: RootState) => state.prods.value;
export const selectProducts = (state: RootState) => state.prods.products;
export default prodsSlice.reducer;
