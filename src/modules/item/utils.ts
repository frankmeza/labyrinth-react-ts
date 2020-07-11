import { Item, itemsMap } from ".";

const getItemByKey = (key: string): Item => {
    return itemsMap[key];
};

export { getItemByKey }