
export default function NoteItemPage({date, text}){
  return (
    <div className="NoteItemPage">
        <li>
          {text} <span> Added: {new Date(date).toLocaleDateString()}</span>
        </li>
    </div>
  )
} 