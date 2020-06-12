import React, { useState, useEffect } from "react";
import RoomView from "./room";
import { forwardRightRoom } from "../modules/ascii";
import { Player, createPlayer } from "../modules/player";

interface AppProps {
  readonly player: Player;
}

const App = (props: AppProps) => {
  const { player: p } = props;

  const [
    player,
    updatePlayer,
  ] = useState(p);

  useEffect(() => {
    // const p = handleLocation(player);
    // updatePlayer(p);
  });

  const debugPlayer = `PLAYER: ${JSON.stringify(player, null, 4)}`;
  const { location } = player;

  return (
    <div>
      <p>Labyringth::React::TS</p>
      {/* DEBUGGER */}
      <pre className="player-debug">{debugPlayer}</pre>
      {/* DEBUGGER */}

      <RoomView roomName={location} />
      {/* <ItemView itemArt itemName isHeld */}
      {/* <MenuView  */}
      {/* <OptionsView  */}
    </div>
  );
};

export default App;
