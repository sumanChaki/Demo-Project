import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isAuthenticated: false,
};

const authReducer = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setLogin: (state, action) => {
      (state.user = action.payload.user), (state.isAuthenticated = true);
    },
    setLogout: (state) => {
      state.user = {};
      state.isAuthenticated = false;
    },
  },
});

export const { setLogin, setLogout } = authReducer.actions;

export default authReducer.reducer;

