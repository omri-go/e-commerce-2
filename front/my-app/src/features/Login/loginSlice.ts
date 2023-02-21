import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { loginUser, logoutUser } from "./loginAPI";

export interface LoginState {
  logged: boolean;
  loggedUser: string;
  tempLoggedUser: string;
}

const initialState: LoginState = {
  logged: false,
  loggedUser: "",
  tempLoggedUser: "",
};

export const loginAsync = createAsyncThunk(
  "login/loginUser",
  async (cred: any) => {
    const response = await loginUser(cred);
    return response;//response.data;
  }
);
export const logoutAsync = createAsyncThunk("login/logoutUser", async () => {
  const response = await logoutUser();
  return response;
});

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.fulfilled, (state, action) => {
        // console.log("refresh", action.payload);
        // console.log("access", action.payload);
        state.logged = true;
      })
      .addCase(logoutAsync.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.logged = false;
      });
  },
});

export const {} = loginSlice.actions;
export const selectLogged = (state: RootState) => state.login.logged;
export default loginSlice.reducer;
