import NewNotePage from "../NewNotePage/NewNotePage";

export default function NoteItemPage({date, text}){
  return (
    <div className="NoteItemPage">
        <li>
          {text} &nbsp; | &nbsp; Added:{new Date(date).toLocaleDateString()}
        </li>
    </div>
  )
} 