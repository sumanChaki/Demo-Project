import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './TodoReducer';


export const Store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});