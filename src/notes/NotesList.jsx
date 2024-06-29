import { useNotes } from "../contexts/NotesContext";
import NoteItem from "./NoteItem";

function NotesList() {
  const { notes, create } = useNotes();

  return (
    <>
      {create && <NoteItem />}
      {notes.length === 0 || (
        <ul className="divide-y-2">
          {notes.map((note) => (
            <li key={note.id}>
              <NoteItem note={note} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default NotesList;
