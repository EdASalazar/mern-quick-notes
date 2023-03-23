import NewNotePage from "../NewNotePage/NewNotePage";

export default function NoteItemPage({date, text}){
  return (
    <div className="NoteItemPage">
        <li className="NoteItemListItem">
          {text}   Added: {date.toLocaleString()} 
        </li>
    </div>
  )
} 