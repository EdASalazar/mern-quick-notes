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
  const [notes, setNotes] = useState(null)

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <NotesPage />
            <NewNotePage />
            <Routes>
              {/* Route components in here */}
              <Route path="/notes/new" element={<NewNotePage/>} />
              <Route path="/notes" element={<NotesPage notes={notes}/>} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
