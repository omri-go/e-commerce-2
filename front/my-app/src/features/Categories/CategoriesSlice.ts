import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { Category } from "../../models/Category";
import { getAllCategories } from "./CategoriesAPI";

export interface categoriesState {
  value: number;
  status: "idle" | "loading" | "failed";
  logged: boolean;
  categories: Category[];
}

const initialState: categoriesState = {
  value: 0,
  status: "idle",
  logged: false,
  categories: [],
};

export const categoriesAsync = createAsyncThunk("cats/catsUser", async () => {
  const response = await getAllCategories();
  return response.data;
});

export const catsSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(categoriesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(categoriesAsync.fulfilled, (state, action) => {
        // console.log(action.payload.data);
        state.categories = action.payload; //as Ctaegory[];
      });
  },
});

export const {} = catsSlice.actions;
export const selectCount = (state: RootState) => state.cats.value;
export const selectLogged = (state: RootState) => state.cats.logged;
export const selectCategories = (state: RootState) => state.cats.categories;
export default catsSlice.reducer;
