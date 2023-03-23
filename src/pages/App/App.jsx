import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NotesPage from '../NotesPage/NotesPage';
import NewNotePage from '../NewNotePage/NewNotePage';
import * as notesAPI from '../../utilities/notes-api'

export default function App() {
  const [user, setUser] = useState(getUser());

  const [notes, setNotes] = useState([]);

  // useEffect(function() {
  //   async function getItems() {
  //     const notesData = await notesAPI.getById(user._id)
  //     console.log(notesData)
  //     setNotes(notesData)
  //   }
  //   getItems();
  // }, []);

// useEffect(function() {
//     async function getNotes() {
//       const notes = await notesAPI.getAll();
//       setNotes(notes);
//     }
//     getNotes();
// }, []);

useEffect(function() {
    async function getNotes() {
      const notes = await notes.notesAPI.getById()
      setNotes(notes);
    }
    getNotes();
}, []);




  async function addNote(note) {
    const newNote = await notesAPI.create(note);
    setNotes([...notes, newNote])
  };



  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <NewNotePage notes={notes} addNote={addNote}/>
            <NotesPage notes={notes} user={user} addNote={addNote}/>
            <Routes>
              {/* Route components in here */}
              <Route path="/notes/new" element={<NewNotePage notes={notes} addNote={addNote}/>} />
              <Route path="/notes" element={<NotesPage notes={notes} user={user} addNote={addNote}/>} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
