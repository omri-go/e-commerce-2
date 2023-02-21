import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import CategoriesSlice from "../features/Categories/CategoriesSlice";
import catsReducer from "../features/Categories/CategoriesSlice";
import loginReducer from "../features/Login/loginSlice";
import prodsReducer from "../features/products/prodsSlice";
import studenReducer from "../features/student/studentSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    cats: catsReducer,
    prods: prodsReducer,
    cart: cartSlice,
    student: studenReducer,
    categories: CategoriesSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
