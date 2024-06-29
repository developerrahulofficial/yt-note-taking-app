import { createContext, useContext, useEffect, useState } from "react";
import { usePlayer } from "./PlayerContext";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";

const NotesContext = createContext();

export function NotesProvider({ children }) {
  const { vidId, player } = usePlayer();
  const [inputText, setInputText] = useState("");
  const [time, setTime] = useState(0);
  const [notes, setNotes] = useState([]);
  const [create, setCreate] = useState(false);
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(vidId));
    if (data === null) return setNotes([]);
    setNotes(data);
  }, [vidId]);

  useEffect(() => {
    localStorage.setItem(vidId, JSON.stringify(notes));
  }, [notes, vidId]);

  const createHandler = () => {
    if (inputText.length === 0)
      return toast.error("Please enter the content of the note!");
    setNotes((prevNotes) => [
      {
        id: uuid(),
        content: inputText,
        timestamp: player.getCurrentTime(),
        date: Date.now(),
      },
      ...prevNotes,
    ]);
    setInputText("");
    setCreate(false);
    toast.success("Note added successfuly!");
  };

  const editHandler = () => {
    if (inputText.length === 0)
      return toast.error("Please enter the content of the note!");
    setNotes(() =>
      notes.map((note) => {
        if (note.id === edit) {
          return { ...note, content: inputText };
        }
        return note;
      })
    );
    setInputText("");
    setEdit(null);
    toast.success("Note edited successfuly!");
  };

  const deleteHandler = (id) => {
    setNotes(() => notes.filter((n) => n.id !== id));
    toast.success("Note deleted successfully!");
  };

  const cancelHandler = () => {
    setCreate(false);
    setEdit(null);
    setInputText("");
  };

  return (
    <NotesContext.Provider
      value={{
        createHandler,
        deleteHandler,
        cancelHandler,
        editHandler,
        inputText,
        setInputText,
        create,
        edit,
        notes,
        setCreate,
        setEdit,
        time,
        setTime,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const context = useContext(NotesContext);
  if (context === undefined)
    throw new Error("Notes Context was used outside the notes provider");
  return context;
}
