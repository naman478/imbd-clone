import {createSlice} from "@reduxjs/toolkit";

const notesSlice=createSlice({
   name:'notesSlice',
   initialState:{
    notes:[{
        title:"",
        desc:"",
        id:""
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