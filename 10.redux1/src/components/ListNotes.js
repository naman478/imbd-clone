import React from 'react'
import { useSelector } from 'react-redux'

function ListNotes() {
  const notes=useSelector(state=>state.notesReducer.notes);
  return (
    <div>
      {
        notes.map(note=>{
          <>
           <p>{note.id}</p>
           <p>{note.title}</p>
          </>
        })
      }
    
    </div>
  )
}

export default ListNotes