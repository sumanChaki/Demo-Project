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
    setLogout: (state) => {
      state.user = null,
      state.token = null,
      state.isAuthenticated = false
    }
  }
})

export const { setLogin, setLogout } = authReducer.actions;

export default authReducer.reducer;

