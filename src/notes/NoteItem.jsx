import toast from "react-hot-toast";
import Textarea from "../components/Textarea";
import { useNotes } from "../contexts/NotesContext";
import { usePlayer } from "../contexts/PlayerContext";
import { formattedDate } from "../helpers/formattedDate";
import CreateEditBtns from "./CreateEditBtns";
import DeleteEditBtns from "./DeleteEditBtns";
import Timestamp from "./Timestamp";

function NoteItem({ note }) {
  const { player } = usePlayer();
  const { edit, inputText, setInputText } = useNotes();

  return (
    <div className="py-4">
      <p className="text-sm  font-medium">
        {formattedDate(!note?.id ? Date.now() : note.date)}
      </p>
      <Timestamp note={note} />
      <Textarea
        value={!note?.id || edit === note?.id ? inputText : note.content}
        onChange={(e) => {
          if (e.target.value.length > 1000)
            return toast.error("Maximum character limit: 1000");
          setInputText(e.target.value);
        }}
        onFocus={() => player.pauseVideo()}
        disabled={!(!note?.id || edit === note?.id)}
        placeholder="Enter your note ..."
      />
      <div className="flex items-center justify-end">
        {!note?.id || edit === note?.id ? (
          <CreateEditBtns />
        ) : (
          <DeleteEditBtns id={note?.id} content={note.content} />
        )}
      </div>
    </div>
  );
}

export default NoteItem;
