import NoteItemPage from "../NoteItemPage/NoteItemPage";


export default function NotesPage({ notes, user, addNote }) {
  const singleNote = notes.map((note, idx) => 
  <NoteItemPage 
  text={note.text} 
  date={note.createdAt.toLocaleString("en-US")}
  key={idx} 
  />);

  return (
    <div className="NotesPage">
      <h1>A Quick Note While He's Away</h1>
      <ul className="NotePageList">
        {singleNote}
      </ul>
    </div>
  );
}