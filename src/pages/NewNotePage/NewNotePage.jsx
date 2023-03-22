import { useState } from 'react';

export default function NewNotePage({ addNote, user }) {
  const [newNote, setNewNote] = useState({text: "", user: {user}})

  function handleChange(evt) {
    setNewNote({...newNote, [evt.target.name]: evt.target.value})
  }
function handleAddNote(evt) {
  evt.preventDefault();
  addNote(newNote)
  setNewNote({ text: "", user: null })
}

  return (
    <div className="NewNotePage">
      <h2>Add A New Note</h2>
      <form onSubmit={handleAddNote}>
        <input type="text" 
        name="text" 
        placeholder="New Note..." 
        value={newNote.text}
        onChange={handleChange}
        />
        <button type="submit">Add A Note</button>
      </form>


    </div>
  );
}