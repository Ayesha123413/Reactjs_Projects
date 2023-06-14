import React, { useState } from 'react'
import './AddNotes.css'
const AddNotes = ({ AddNote }) => {
  const [noteText, setNoteText] = useState('')
  const characterLimit = 300
  const handletext = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value)
    }
  }
  const handleSaveNote = (e) => {
    if (noteText.trim().length > 0) {
      AddNote(noteText)
      setNoteText('')
    }
  }

  return (
    <div className="note new">
      <textarea
        rows="10"
        cols="38"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handletext}
      ></textarea>
      <div className="note-footer">
        <span>{characterLimit - noteText.length} remaining</span>
        <svg
          className="save"
          onClick={handleSaveNote}
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-plus"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#f3e8cc"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 5l0 14" />
          <path d="M5 12l14 0" />
        </svg>
      </div>
    </div>
  )
}

export default AddNotes
