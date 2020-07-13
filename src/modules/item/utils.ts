import { Item, itemsMap, ItemsMap } from ".";

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

const updateItemLocation = (itemsMap: ItemsMap, itemName: string, location: string): void => {
    const updatedItem = { ...itemsMap[itemName], location };
    const { name } = updatedItem;

    itemsMap = {
        ...itemsMap,
        [name]: updatedItem,
    }
}

export { getPlayerItems, getRoomItems, updateItemLocation };
