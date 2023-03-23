import NoteItemPage from "../NoteItemPage/NoteItemPage";


export default function NotesPage({ notes, user }) {
  const singleNote = notes.map((note, idx) => 
  <NoteItemPage 
  text={note.text} 
  date={note.createdAt} 
  />);

  return (
    <>
      <h1>A Quick Note While He's Away</h1>
      <ul>
        {singleNote}
      </ul>
    </>
  );
}