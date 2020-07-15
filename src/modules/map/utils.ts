import { Item } from "../item";
import { itemsMap } from "../../core";

const getItemsInRoom = (roomName: string): string[] => {
    const itemsList: Item[] = Object.values(itemsMap);

    const names = itemsList.reduce((acc: string[], item: Item) => {
        if (item.location !== roomName) {
            return [...acc, item.name];
        }

        return acc;
    }, []);

    return names;
};

export { getItemsInRoom };
