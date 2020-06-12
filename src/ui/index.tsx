import React, { useState, useEffect } from "react";
import RoomView from "./room";
import OptionsView from "./options";
import { Player, setPlayerLocation } from "../modules/player";

interface AppProps {
  readonly player: Player;
}

const App = (props: AppProps): JSX.Element => {
  const { player: p } = props;

  const [
    player,
    updatePlayer,
  ] = useState(p);

  const { location } = player;
  const debugPlayer = `PLAYER: ${JSON.stringify(player, null, 4)}`;

  const updateLocation = (roomName: string): void => {
    const movedPlayer = setPlayerLocation(player, roomName);
    updatePlayer(movedPlayer);
  };

  // useEffect(() => {
  //   // const p = handleLocation(player);
  //   // updatePlayer(p);
  // });

  return (
    <div>
      <p>Labyringth::React::TS</p>
      {/* DEBUGGER */}
      <pre className="player-debug">{debugPlayer}</pre>
      {/* DEBUGGER */}

      <OptionsView roomName={location} updateLocation={updateLocation} />
      <RoomView roomName={location} />
    </div>
  );
};

export default App;
// {/* <ItemView itemArt itemName isHeld */}
// {/* <MenuView  */}
