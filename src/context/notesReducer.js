const notesReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_NOTE':
      const newState = {
        lastNoteCreatedAt: new Date().toTimeString.slice(0, 8),
        totalNotes: state.notes.length + 1,
        notes: [...state.notes, action.payload]
      }
      return newState
    default:
      return state
  }
}

export default notesReducer