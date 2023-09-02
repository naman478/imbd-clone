import { nanoid } from '@reduxjs/toolkit';
import React,{useState} from 'react'
import {useDispatch} from "react-redux"
import { createNote } from '../redux/slices/notesSlice';

function CreateNote() {

    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const dispatch=useDispatch();

    function handleSubmit(e){
        alert("submit");
        e.preventDefault();
        dispatch(createNote({
            title,
            desc,
            id:nanoid(5)
        }))
    }
  return (
    <div>

        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=>setTitle(e.target.value)}/>
            <input type="text" onChange={(e)=>setDesc(e.target.value)}/>
            <input type="submit" onClick={handleSubmit}/>
        </form>
    </div>
  )
}

export default CreateNote;