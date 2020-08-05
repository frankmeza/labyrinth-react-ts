import { Item, ItemsMap, defaultItemsMap } from ".";

const createItem = (
    name: string,
    description: string,
    art: string,
    location: string | null,
): Item => {
    return {
        name,
        description,
        art,
        location,
    };
};

const isPlayerItem = (item: Item) => {
    // location is null if carried by player
    return item.location === null;
};

const getPlayerItems = (iMap: ItemsMap): Item[] => {
    return Object.values(iMap).filter(isPlayerItem);
};

const isRoomItem = (item: Item, playerLocation: string) => {
    return item.location === playerLocation;
};

const getRoomItems = (playerLocation: string, iMap: ItemsMap): Item[] => {
    return Object.values(iMap).filter(item => isRoomItem(item, playerLocation));
};

const updateItemLocation = (
    iMap: ItemsMap,
    itemName: string,
    location: string | null,
): ItemsMap => {
    const updatedItem = { ...iMap[itemName], location };
    const { name } = updatedItem;

    const itemsMap = {
        ...iMap,
        [name]: updatedItem,
    };

    return itemsMap;
};

const createItemsMap = (props: ItemsMap = defaultItemsMap): ItemsMap => {
    return props;
};

export {
    createItem,
    createItemsMap,
    getPlayerItems,
    getRoomItems,
    updateItemLocation,
};
