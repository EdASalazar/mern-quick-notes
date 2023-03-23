import { useState } from 'react';
import { create } from '../../utilities/notes-services'


export default function NewNotePage({ addNote }) {
  const [newNote, setNewNote] = useState({text: ""});
  
  function handleChange(evt) {
    setNewNote({...newNote, [evt.target.name]: evt.target.value})
  
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
    const note = await create(newNote);
    } catch {
      console.log('Error making note')
    }
  }  


  return (
    <div className="NewNotePage">
      <h2>Add A New Note</h2>
      <form onSubmit={handleSubmit}>
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
