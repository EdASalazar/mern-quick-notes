import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NotesPage from '../NotesPage/NotesPage';
import NewNotePage from '../NewNotePage/NewNotePage';

export default function App() {
  const [user, setUser] = useState(getUser());
// I think it has to be the user Id
// not sure how to get that just yet 

  const [notes, setNotes] = useState([
    { text: "A note", user: null},
    { text: "B note", user: null},
    { text: "C note", user: null}
  ])

  function addNote(newNote) {
    setNotes([...notes, newNote]);
  }

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <NotesPage />
            <NewNotePage />
            <Routes>
              {/* Route components in here */}
              <Route path="/notes/new" element={<NewNotePage notes={notes} user={user}/>} />
              <Route path="/notes" element={<NotesPage notes={notes} addNote={addNote} user={user}/>} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
