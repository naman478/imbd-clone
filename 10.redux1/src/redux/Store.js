import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./slices/notesSlice.js";

export default configureStore({
    reducer:{
        notesReducer
    }
})