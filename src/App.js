import { useState, useReducer } from 'react'
import './App.css'
import { initialNotesState } from './context/NotesContext'
import notesReducer from './context/notesReducer'
import { v4 as uuid } from 'uuid'

const App = () => {
  const [noteInput, setNoteInput] = useState('')
  const [notesState, dispatch] = useReducer(notesReducer, initialNotesState)
  
  const addNote = (e) => {
    e.preventDefault()
    
    // Stop it from adding an empty note
    if (!noteInput) {
      return
    }

    const newNote = {
      id: uuid(),
      text: noteInput,
      rotate: Math.floor(Math.random() * 20)
    }

    dispatch({ type: 'ADD_NOTE', payload: newNote })
    setNoteInput('')
  }

  const dropNote = (e) => {
    e.target.style.left = `${e.pageX - 50}px`
    e.target.style.top = `${e.pageY - 50}px`
  }

  const dragOver = (e) => {
    e.stopPropagation()
    e.preventDefault()
  }

  return (
    <div className="App" onDragOver={dragOver}>
       <h1>Stick It!</h1>
       <form onSubmit={addNote} className='note-form'>
         <textarea
           value={noteInput} 
           onChange={(e) => setNoteInput(e.target.value)}
           placeholder="Get sticky?"
         />
         <button>Add</button>
       </form>

       {
        notesState.notes.map(note => (
          <div
            className='note'
            style={{ transform: `rotate(${note.rotate}deg)`}}
            draggable="true"
            onDragEnd={dropNote}
            key={note.id}
          >
            <pre className='text'>{note.text}</pre>
          </div>
        ))
       }
    </div>
  );
}

export default App;
