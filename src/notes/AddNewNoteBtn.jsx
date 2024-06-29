import { LuPlusCircle } from "react-icons/lu";
import { useNotes } from "../contexts/NotesContext";
import { usePlayer } from "../contexts/PlayerContext";
import Button from "../components/Button";

function AddNewNoteBtn() {
  const { create, edit, setCreate } = useNotes();
  const { player } = usePlayer();

  return (
    <Button
      onClick={() => {
        setCreate(true);
        player.pauseVideo();
      }}
      disabled={create || edit}
    >
      <LuPlusCircle className="text-xl" />
      <span className="text-xs font-semibold text-gray-800  sm:inline lg:text-sm  hidden">
        Add New Note
      </span>
    </Button>
  );
}

export default AddNewNoteBtn;
