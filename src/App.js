import './App.css';

function App() {

  const addNote = () => {

  }
  return (
    <div className="App">
       <h1>Stick It</h1>
       <form onSubmit={addNote} className='note-form'>
         <textarea placeholder="Get sticky?"></textarea>
         <button>Add</button>
       </form>
    </div>
  );
}

export default App;
