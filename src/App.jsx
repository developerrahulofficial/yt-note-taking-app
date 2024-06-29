import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import YoutubeVideo from "./components/YoutubeVideo";
import { NotesProvider } from "./contexts/NotesContext";
import { PlayerProvider } from "./contexts/PlayerContext";
import Notes from "./notes/Notes";

function App() {
  return (
    <PlayerProvider>
      <NotesProvider>
        <Header />
        <YoutubeVideo />
        <Notes />
        <Toaster position="bottom-center" />
      </NotesProvider>
    </PlayerProvider>
  );
}

export default App;
