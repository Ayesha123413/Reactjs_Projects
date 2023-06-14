import { useEffect, useState } from 'react'
import './App.css'
import NotesList from './components/NotesList/NotesList'
import { nanoid } from 'nanoid'
import Search from './components/Search/Search'
function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'this is 1 notes',
      date: '15/6/2023',
    },
    {
      id: nanoid(),
      text: 'this is 2 notes',
      date: '15/6/2023',
    },
    {
      id: nanoid(),
      text: 'this is 3 notes',
      date: '15/6/2023',
    },
    {
      id: nanoid(),
      text: 'this is 4 notes',
      date: '15/6/2023',
    },
  ])

  const [searchText, setSearchText] = useState('')

  const addnote = (text) => {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
    console.log(newNotes.id)
  }
  const deletenote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
    console.log('click', { id })
  }
  //whenever app loads , all saved noted sould be retrived from local storage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('app-data'))
    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])
  //save notes to local storage
  useEffect(() => {
    localStorage.setItem('app-data', JSON.stringify(notes))
  }, [notes])
  return (
    <div className="App">
      <div className="container">
        <h1>Notify</h1>

        <Search handleSerachNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText.toLowerCase()),
          )}
          addnote={addnote}
          deletenote={deletenote}
        />
      </div>
    </div>
  )
}

export default App
