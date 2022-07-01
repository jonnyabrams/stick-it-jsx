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
            <div className='close' onClick={() => dispatch({ type: 'DELETE_NOTE', payload: note })}>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <pre className='text'>{note.text}</pre>
          </div>
        ))
       }
    </div>
  );
}

export default App;
