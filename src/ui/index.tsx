import React, { useState, useEffect } from "react";
import RoomView from "./room";
import OptionsView from "./options";
import MenuView from "./menu";
import ItemsView from "./items";
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

    const { items, location } = player;

    const debugPlayer = `PLAYER: ${JSON.stringify(player, null, 4)}`;

    const updateLocation = (roomName: string): void => {
        const movedPlayer = setPlayerLocation(player, roomName);
        updatePlayer(movedPlayer);
    };

    const makeUpdatesPlayer = () => {
        updatePlayer(decrementPlayerTorch(player));
    };

    useEffect(makeUpdatesPlayer, [location]);

    const linesOfText = calculateTextDisplay(player);

    return (
        <div>
            <p>Labyringth::React::TS</p>
            <div className="ui-row">
                <pre className="player-debug">{debugPlayer}</pre>

                <OptionsView
                    roomName={location}
                    updateLocation={updateLocation}
                />
            </div>

            <MenuView linesOfText={linesOfText} />

            <div className="ui-row">
                <ItemsView playerLocation={null} />
                <ItemsView playerLocation={location} />
            </div>
            <RoomView roomName={location} />
        </div>
    );
};

export default App;
