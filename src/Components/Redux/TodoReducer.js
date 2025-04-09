import React from "react";
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

const todoReducer = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {              
        const newTodo = {
            id: nanoid(),
            title: action.payload
        } 
        state.todos.push(newTodo);
    },

    editTodo: (state, action) => {      
      const {id, title} = action.payload;
      console.log("title", title, id);

      const todoSelect = state.todos.find(item => item.id === id)
      console.log("id >>>", id);

      if(todoSelect){
       todoSelect.title = title;
      }

    },

    deleteTodo: (state, action) => {
      console.log("delete >>", action.payload);
      state.todos = state.todos.filter((item) => item.id !== action.payload.id);
    },

    completeTodo: (state, action) => {
      console.log("update >>", action.payload);
      const completeTodo = state.todos.find(item => item.id === action.payload.id)
      if(completeTodo){
        completeTodo.completed = !completeTodo.completed
      }
      
    }
  }

});

export const { addTodo, editTodo, deleteTodo, completeTodo } = todoReducer.actions;

export default todoReducer.reducer;
