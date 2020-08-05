import { createPlayer } from "../modules/player/utils";
import { createItemsMap } from "../modules/item/utils";

const player = createPlayer();
const itemsMap = createItemsMap();

export { itemsMap, player };
