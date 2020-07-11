import { Room } from ".";
import { Item, itemsList } from "../item";

const getItemsInRoom = (roomName: string): string[] => {
    const names = itemsList.reduce((acc: string[], item: Item) => {
        if (item.location !== roomName) {
            return [...acc, item.name];
        }

        return acc;
    }, []);

    return names;
};

export { getItemsInRoom };
