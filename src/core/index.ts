import { createPlayer } from "../modules/player";
import { createItemsMap } from "../modules/item";

const player = createPlayer();
const itemsMap = createItemsMap();

export { itemsMap, player };
