import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: "",
    recipes: []
}

const cartReducers = createSlice({
    name: "carts",
    initialState: initialState,
    reducers: {
        addCart: (state, action) => {    
            // console.log("action >>", action.payload);                    
            state.userId = action.payload.userId;
            state.recipes = action.payload.recipes

        },
        removeCart: (state) => {
            state.userId = "";
            state.recipes = [];
        }
    }
})

export const { addCart, removeCart } = cartReducers.actions;
export default cartReducers.reducer;