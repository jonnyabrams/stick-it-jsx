import { useState, useReducer } from 'react';
import './App.css';
import { initialNotesState } from './context/NotesContext';
import notesReducer from './context/notesReducer';

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
      text: noteInput
    }

    dispatch({ type: 'ADD_NOTE', payload: newNote })
  }
  return (
    <div className="App">
       <h1>Stick It</h1>
       <form onSubmit={addNote} className='note-form'>
         <textarea
           value={noteInput} 
           onChange={(e) => setNoteInput(e.target.value)}
           placeholder="Get sticky?"
         />
         <button>Add</button>
       </form>
    </div>
  );
}

export default App;
