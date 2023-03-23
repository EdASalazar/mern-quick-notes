import NewNotePage from "../NewNotePage/NewNotePage";
import NoteItemPage from "../NoteItemPage/NoteItemPage";


export default function NotesPage({ notes, user }) {
  const singleNote = notes.map((note, idx) => 
  <NoteItemPage 
  text={note.text} 
  date={note.createdAt} 
  />);

  return (
    <div className="NotesPage">
      <h1>A Quick Note While He's Away</h1>
      <ul className="NotePageList">
        {singleNote}
      </ul>
      <NewNotePage />
    </div>
  );
}