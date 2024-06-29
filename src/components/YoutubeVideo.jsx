import YouTube from "react-youtube";
import { usePlayer } from "../contexts/PlayerContext";
import { useNotes } from "../contexts/NotesContext";

function YoutubeVideo() {
  const { player, onReady, vidId: id } = usePlayer();
  const { setTime } = useNotes();

  const opts = {
    height: "600",
    width: "1070",
    playerVars: {
      rel: 0,
    },
  };

  const onStateChange = (e) => {
    setTime(() => player.getCurrentTime());
  };

  return (
    <section className="video-container">
      <YouTube
        videoId={id}
        opts={opts}
        onReady={onReady}
        onStateChange={onStateChange}
      />
    </section>
  );
}

export default YoutubeVideo;
