import { Item, itemsMap } from ".";

const isPlayerItem = (item: Item) => {
    // location is null if carried by player
    return item.location === null;
};

const getPlayerItems = (): Item[] => {
    return Object.values(itemsMap).filter(isPlayerItem);
};

const isRoomItem = (item: Item, playerLocation: string) => {
    return item.location === playerLocation;
};

const getRoomItems = (playerLocation: string): Item[] => {
    return Object.values(itemsMap).filter(item => isRoomItem(item, playerLocation));
};

export { getPlayerItems, getRoomItems };
