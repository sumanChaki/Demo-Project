import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './TodoReducer';
import authReducer from "./Auth/AuthReducer"


export const Store = configureStore({
  reducer: {
    todo: todoReducer,
    auth: authReducer,
  },
});