import { Room } from ".";
import { Item, itemsList } from "../item";

const doesRoomHaveItems = (room: Room) => {
  return getItemsInRoom(room).length > 0;
};

const getItemsInRoom = (room: Room): string[] => {
  const names = itemsList.reduce((acc: string[], item: Item) => {
    if (item.location !== room.name) {
      return [...acc, item.name];
    }

    return acc;
  }, []);

  return names;
};

export { doesRoomHaveItems, getItemsInRoom };
