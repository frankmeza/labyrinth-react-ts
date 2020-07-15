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
import { ItemsMap } from "../modules/item";
import { updateItemLocation } from "../modules/item/utils";

interface AppProps {
    readonly player: Player;
    readonly itemsMap: ItemsMap;
}

const App = (props: AppProps): JSX.Element => {
    const [state, updateState] = useState({ ...props });
    const { player, itemsMap } = state;

    const { location } = player;

    const debugPlayer = `PLAYER: ${JSON.stringify(player, null, 4)}`;

    const updateLocation = (roomName: string): void => {
        const updatedPlayer = setPlayerLocation(player, roomName);
        updateState({ ...state, player: updatedPlayer });
    };

    const makeUpdates = (): void => {
        const updatedPlayer = decrementPlayerTorch(player);
        updateState({ ...state, player: updatedPlayer });
    };

    useEffect(makeUpdates, [location, itemsMap]);

    const linesOfText = calculateText(player);

    const handleDropItem = (itemName: string) => {
        const updatedPlayer = dropItem(player, itemName);

        const updatedItemsMap = updateItemLocation(
            itemsMap,
            itemName,
            location,
        );

        updateState({
            ...state,
            player: updatedPlayer,
            itemsMap: updatedItemsMap,
        });
    };

    const handlePickupItem = (itemName: string) => {
        const updatedPlayer = pickupItem(player, itemName);
        updateState({ ...state, player: updatedPlayer });

        updateItemLocation(itemsMap, itemName, location);
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
                <ItemsView
                    playerLocation={null}
                    itemsMap={itemsMap}
                    itemHandler={handleDropItem}
                />
                <ItemsView
                    playerLocation={location}
                    itemsMap={itemsMap}
                    itemHandler={handlePickupItem}
                />
            </div>
            <RoomView roomName={location} />
        </div>
    );
};

export default App;
