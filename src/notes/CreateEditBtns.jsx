import Button from "../components/Button";
import { useNotes } from "../contexts/NotesContext";

function CreateEditBtns() {
  const { create, edit, cancelHandler, createHandler, editHandler } =
    useNotes();
  return (
    <div className="flex gap-1">
      <Button onClick={cancelHandler}>Cancel</Button>
      {create && <Button onClick={createHandler}>Create Note</Button>}
      {edit !== null && <Button onClick={editHandler}>Save Note</Button>}
    </div>
  );
}

export default CreateEditBtns;
