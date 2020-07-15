import {
    MATCHES,
    MATCHES_DESC,
    ARROWS,
    ARROWS_DESC,
    BOW,
    BOW_DESC,
    SHIELD,
    SHIELD_DESC,
    HEALTH_POTION,
    HEALTH_POTION_DESC,
    ROOM_1,
    ROOM_6,
    ROOM_3,
    ROOM_4,
} from "../constants/index";
import { arrows, bow, healthPotion, matches, shield } from "../ascii/index";

export interface Item {
    readonly name: string;
    readonly description: string;
    readonly art: string;
    readonly location: string | null; // location is null if it is carried by player
}

export interface ItemsMap {
    readonly [itemName: string]: Item;
}

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

const matchesAscii: Item = createItem(MATCHES, MATCHES_DESC, matches(), null);
const arrowsAscii: Item = createItem(ARROWS, ARROWS_DESC, arrows(), ROOM_1);
const bowAscii: Item = createItem(BOW, BOW_DESC, bow(), ROOM_6);
const shieldAscii: Item = createItem(SHIELD, SHIELD_DESC, shield(), ROOM_3);

const healthPotionAscii: Item = createItem(
    HEALTH_POTION,
    HEALTH_POTION_DESC,
    healthPotion(),
    ROOM_4,
);

const defaultItemsMap: ItemsMap = {
    [`${MATCHES}`]: matchesAscii,
    [`${ARROWS}`]: arrowsAscii,
    [`${BOW}`]: bowAscii,
    [`${SHIELD}`]: shieldAscii,
    [`${HEALTH_POTION}`]: healthPotionAscii,
};

const createItemsMap = (props: ItemsMap = defaultItemsMap): ItemsMap => {
    return props;
};

export { defaultItemsMap, createItemsMap };
