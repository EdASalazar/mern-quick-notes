import { useState } from 'react';



export default function NewNotePage({ addNote }) {
  const [newNote, setNewNote] = useState({text: ""});
  
  function handleChange(evt) {
    setNewNote({...newNote, [evt.target.name]: evt.target.value})
  
  }


function handleSubmit(evt) {
  evt.preventDefault();
  addNote(newNote);
  setNewNote({text: ""});
}

  return (
    <div className="NewNotePage">
      <h2>Add A New Note</h2>
      <form id="NoteForm" className="NewNotwFrom" onSubmit={handleSubmit}>
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
