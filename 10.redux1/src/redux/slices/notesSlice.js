import {createSlice} from "@reduxjs/toolkit";

const notesSlice=createSlice({
   name:'notesSlice',
   initialState:{
    notes:[{
        title:"ff",
        desc:"ff",
        id:"ff"
    }]
   },

   reducers:{
    createNote:(state,action)=>{
        state.notes.push(action.payload);
    },
    deleteNote:(state,action)=>{
    }
   }
})

export default notesSlice.reducer;
export const {createNote,deleteNote}=notesSlice.actions;