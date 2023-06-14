import React from 'react'
import Note from '../Note/Note'
import './NotesList.css'
import AddNotes from '../AddNotes/AddNotes'
const NotesList = ({ notes, addnote, deletenote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => {
        return (
          <Note
            id={note.id}
            text={note.text}
            date={note.date}
            handleDeleteNote={deletenote}
          />
        )
      })}
      <AddNotes AddNote={addnote} />
    </div>
  )
}

export default NotesList
