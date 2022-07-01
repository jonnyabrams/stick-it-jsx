import { useState } from 'react';
import './App.css';

const App = () => {

  const [noteInput, setNoteInput] = useState('')

  const addNote = () => {

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
