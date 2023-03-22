import NoteItemPage from "../NoteItemPage/NoteItemPage";

export default function NotesPage({ notes, user }) {
// const NoteItem = notes.map((note, idx) => (
//   <NoteItem note={note} text={note.text} key={idx} index={idx} />
// ));


  return (
    <>
      <h1>NotesPage</h1>
      <NoteItemPage />
    </>
  );
}