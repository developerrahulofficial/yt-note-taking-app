import { createContext, useContext, useState } from "react";

const PlayerContext = createContext();

export function PlayerProvider({ children }) {
  const [player, setPlayer] = useState(null);
  const [vidId, setVidId] = useState(null);

  const onReady = (e) => {
    setPlayer(e.target);
  };

  return (
    <PlayerContext.Provider value={{ onReady, vidId, setVidId, player }}>
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const context = useContext(PlayerContext);
  if (context === undefined)
    throw new Error("Player Context was used outside the player provider");
  return context;
}
