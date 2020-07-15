interface OptionsObject {
    readonly alertVersion?: boolean;
    readonly wantsMoreSpace?: boolean;
}

export const starSeparator = (): string => {
    return [
        "",
        "*****************************************************************************",
        "*****************************************************************************",
        "",
    ].join("\n");
};

export const lostInALabyrinth = (): string => {
    return [
        "      LOST IN A LABYRINTH...",
        "",
        "you find yourself inside of a huge labyrinth",
        "the rooms are dark and damp and made of solid stone",
        "the only way out is through...",
        "",
        "you are armed only with a torch, and matches to relight the torch",
        "you must enter the labyrinth and fight the minotaur to escape",
        "there may be items you encounter along the way that are necessary",
        "or required to win this fight",
        "",
        "choose your path wisely, or you may end up lost in the labyrinth forever...",
        "",
    ].join("\n");
};

export const itemsOnGround = (
    { wantsMoreSpace }: OptionsObject = {},
): string => {
    const space = wantsMoreSpace ? "\n\n\n\n\n\n\n\n" : "";

    return [
        "there are items on the ground",
        `it really seems like something from this room is going to be very important${space}`,
    ].join("\n");
};

export const cannotRelightTorch = (
    { alertVersion }: OptionsObject = {},
): string => {
    return alertVersion
        ? [
              "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "without a lit torch you can't do anything and now you lose",
              "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          ].join("\n")
        : [
              "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              "without a lit torch you can't do anything and now you lose",
              "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          ].join("\n");
};

export const playerCannotPickUpItem = (): string => {
    return [
        "you don't have any more room in your inventory!",
        "you might need to leave something behind",
    ].join("\n");
};

export const allItemsPickedUp = (): string => {
    return "you picked up all the items";
};

export const playerCurrentlyCarrying = (): string => {
    return "you are currently carrying:";
};

export const whatPlayerCanDrop = (): string => {
    return "what are you going to drop?";
};

export const readyToFight = (): string => {
    return [
        "you have collected the shield, bow, and arrows...",
        "you are ready to take on the minotaur",
    ].join("\n");
};

export const youHaveHealthPotion = (): string => {
    return [
        "you have a bottle of health potion in your inventory",
        "this gives you the ability to revive yourself and",
        "continue fighting the first time you are injured",
    ].join("\n");
};

export const enterMinotaurLair = (): string => {
    return [
        "you arm yourself with your weapons and enter the minotaur's lair",
        "hopefully you make it through this alive...",
        "** at start of fight player health is 20",
        "** at start of fight minotaur health is 20",
    ].join("\n");
};

// export const printFightersInitialHealth() => {}

export const youKilledMinotaur = (): string => {
    return [
        "****************************************************************",
        "you killed the minotaur and get to escape the labyrinth!",
        "****************************************************************",
    ].join("\n");
};

export const minotaurKilledYou = (): string => {
    return [
        "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        "the minotaur killed you, your soul is stuck here forever",
        "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    ].join("\n");
};
