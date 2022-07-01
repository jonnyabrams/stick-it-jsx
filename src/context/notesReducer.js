const notesReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_NOTE':
      const newState = {
        lastNoteCreatedAt: new Date().toTimeString().slice(0, 8),
        totalNotes: state.notes.length + 1,
        notes: [...state.notes, action.payload]
      }
      return newState
    case 'DELETE_NOTE':
      const deleteNewState = {
        ...state,
        totalNotes: state.notes.length - 1,
        notes: state.notes.filter(note => note.id !== action.payload.id)
      }
      return deleteNewState
    default:
      return
  }
}

export default notesReducer