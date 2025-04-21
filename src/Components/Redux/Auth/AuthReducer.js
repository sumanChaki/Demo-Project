import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

const authReducer = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user,
      state.token = action.payload.token,
      state.isAuthenticated = true
    },
    setPassword: (state) => {
      state.user = null,
      state.token = null,
      state.isAuthenticated = false
    }
  }
})

export const {setLogin, setPassword} = authReducer.actions;

export default authReducer.reducer;

