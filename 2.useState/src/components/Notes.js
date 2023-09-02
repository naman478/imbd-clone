import React, { useState } from 'react'

function Notes() {
    const [notes,setNotes]=useState([]);
    const [curNote,setCurNote]=useState("");

    function updateCurNote(e){
        setCurNote(e.target.value)
    }

    function addNote(e){
         const newArray=[...notes,curNote];
         setNotes(newArray);
    }

  return (
    <>
        <input onChange={updateCurNote} type="text"/>
        <button onClick={addNote}>Submit</button>

        <ul>{notes.map(note=>{
            return <li>{note}</li>
        })}</ul>

    </>
  )
}

export default Notes