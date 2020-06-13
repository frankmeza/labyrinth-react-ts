import React, { useState, useEffect } from "react";
import RoomView from "./room";
import OptionsView from "./options";
import MenuView from "./menu";
import {
  Player,
  decrementPlayerTorch,
  setPlayerLocation,
} from "../modules/player";
import { calculateTextDisplay } from "../modules/story";

interface AppProps {
  readonly player: Player;
}

const App = (props: AppProps): JSX.Element => {
  const { player: p } = props;
  const [player, updatePlayer] = useState(p);

  const { location } = player;

  const debugPlayer = `PLAYER: ${JSON.stringify(player, null, 4)}`;

  const updateLocation = (roomName: string): void => {
    const movedPlayer = setPlayerLocation(player, roomName);
    updatePlayer(movedPlayer);
  };

  // prettier-ignore
  useEffect(() => {
    updatePlayer(decrementPlayerTorch(player))
  }, [location]);

  const linesOfText = calculateTextDisplay(player);

  return (
    <div>
      <p>Labyringth::React::TS</p>
      {/* DEBUGGER */}
      <pre className="player-debug">{debugPlayer}</pre>
      {/* DEBUGGER */}

      <MenuView linesOfText={linesOfText} />
      <OptionsView roomName={location} updateLocation={updateLocation} />
      <RoomView roomName={location} />
    </div>
  );
};

export default App;
// {/* <ItemView itemArt itemName isHeld */}
