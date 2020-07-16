import { Item } from "../item";
import { itemsMap } from "../../core";
import { Room, ExitsMap } from ".";

const createRoom = (name: string, art: string, exits: ExitsMap): Room => {
    return {
        name,
        art,
        exits,
    };
};

const getItemsInRoom = (roomName: string): string[] => {
    const itemsList: Item[] = Object.values(itemsMap);

    const names = itemsList.reduce((acc: string[], item: Item) => {
        if (item.location === roomName) {
            return [...acc, item.name];
        }

        return acc;
    }, []);

    return names;
};

export { createRoom, getItemsInRoom };
