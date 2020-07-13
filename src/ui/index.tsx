import React, { useState, useEffect } from "react";
import RoomView from "./room";
import OptionsView from "./options";
import MenuView from "./menu";
import ItemsView from "./items";
import {
    Player,
    decrementPlayerTorch,
    setPlayerLocation,
    dropItem,
    pickupItem,
} from "../modules/player";
import { calculateText } from "../modules/story/utils";
import { itemsMap } from "../modules/item";
import { updateItemLocation } from "../modules/item/utils";

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

    const makeUpdates = (): void => {
        updatePlayer(decrementPlayerTorch(player));
    };

    useEffect(makeUpdates, [location, itemsMap]);

    const linesOfText = calculateText(player);

    const handleDropItem = (itemName: string) => {
        updatePlayer(dropItem(player, itemName));
        updateItemLocation(itemsMap, itemName, location)
    };

    const handlePickupItem = (itemName: string) => {
        updatePlayer(pickupItem(player, itemName));
        updateItemLocation(itemsMap, itemName, location)
    };

    return (
        <div>
            <p>Labyringth::React::TS</p>
            <MenuView linesOfText={linesOfText} />

            <div className="ui-row">
                <pre className="player-debug">{debugPlayer}</pre>

                <OptionsView
                    roomName={location}
                    updateLocation={updateLocation}
                />
            </div>

            <div className="ui-row">
                <ItemsView playerLocation={null} itemHandler={handleDropItem} />
                <ItemsView
                    playerLocation={location}
                    itemHandler={handlePickupItem}
                />
            </div>
            <RoomView roomName={location} />
        </div>
    );
};

export default App;
