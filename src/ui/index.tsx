import React, { useState, useEffect } from "react";
import RoomView from "./room";
import OptionsView from "./options";
import MenuView from "./menu";
import ItemsView from "./items";
import { Player } from "../modules/player";
import {
    decrementPlayerTorch,
    setPlayerLocation,
    dropItem,
    pickupItem,
} from "../modules/player/utils";
import { calculateText } from "../modules/story/utils";
import { ItemsMap, Item } from "../modules/item";
import { updateItemLocation } from "../modules/item/utils";

interface AppProps {
    readonly player: Player;
    readonly itemsMap: ItemsMap;
}

type PlayerCallbackFn = (player: Player, itemName: string) => Player;

const App = (props: AppProps): JSX.Element => {
    const { player: p } = props;

    const [state, updateState] = useState({
        ...props,
        linesOfText: calculateText(p),
    });

    const { player, itemsMap } = state;

    const { location } = player;

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

    const handleMovingItem = (
        playerCallbackFn: PlayerCallbackFn,
        itemName: string,
        isPickup: boolean,
    ): void => {
        const updatedPlayer: Player = playerCallbackFn(player, itemName);
        const updatedItemLocation = isPickup ? null : location;

        const updatedItemsMap = updateItemLocation(
            itemsMap,
            itemName,
            updatedItemLocation,
        );

        updateState({
            ...state,
            player: updatedPlayer,
            itemsMap: updatedItemsMap,
        });
    };

    const handleDropItem = (itemName: string) => {
        handleMovingItem(dropItem, itemName, false);
    };

    const handlePickupItem = (itemName: string) => {
        handleMovingItem(pickupItem, itemName, true);
    };

    ///// debug stuff
    const debugItems: Item[] = Object.values(itemsMap).map(item => ({
        ...item,
        art: "",
        description: "",
    }));

    const debuggerItems = `ITEMS: ${JSON.stringify(debugItems, null, 4)}`;
    const debuggerPlayer = `PLAYER: ${JSON.stringify(player, null, 4)}`;
    ///// debug stuff

    const updatePlayer = (updatedPlayer: Player): void => {
        updateState({ ...state, player: updatedPlayer });
    };

    return (
        <div>
            <p>Labyringth::React::TS</p>
            <div className="ui-row">
                <pre className="debug">{debuggerPlayer}</pre>
                <pre className="debug">{debuggerItems}</pre>
            </div>

            <div className="ui-row">
                <OptionsView
                    roomName={location}
                    updateLocation={updateLocation}
                />

                <RoomView roomName={location} />

                <MenuView
                    textMetadata={linesOfText}
                    updatePlayer={updatePlayer}
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
        </div>
    );
};

export default App;
