import { PlayerProps, defaultPlayerProps, Player } from ".";
import { MAX_MOVES_BEFORE_MATCHES_NEEDED } from "../constants";

const createPlayer = (props: PlayerProps = defaultPlayerProps): Player => {
    const { isTorchLit, location, movesLeftForLitTorch, items } = props;

    return {
        location,
        isTorchLit,
        movesLeftForLitTorch,
        items,
    };
};

const killPlayer = (): Player => {
    return {
        location: "DEAD",
        isTorchLit: false,
        movesLeftForLitTorch: 0,
        items: ["all stolen by graverobbers"],
    };
};

const setPlayerLocation = (player: Player, location: string): Player => {
    return {
        ...player,
        location,
    };
};

const setPlayerTorch = (player: Player, isTorchLit: boolean): Player => {
    const { movesLeftForLitTorch: movesRemaining } = player;

    const movesLeftForLitTorch = isTorchLit
        ? MAX_MOVES_BEFORE_MATCHES_NEEDED
        : movesRemaining;

    return {
        ...player,
        movesLeftForLitTorch,
        isTorchLit,
    };
};

const decrementPlayerTorch = (player: Player): Player => {
    const { movesLeftForLitTorch: movesRemaining } = player;

    return {
        ...player,
        movesLeftForLitTorch: movesRemaining - 1,
    };
};

const pickupItem = (player: Player, itemName: string): Player => {
    const items = [...player.items, itemName];

    return {
        ...player,
        items,
    };
};

const dropItem = (player: Player, itemName: string): Player => {
    const items = [...player.items.filter(item => item !== itemName)];

    return {
        ...player,
        items,
    };
};

export {
    createPlayer,
    killPlayer,
    setPlayerTorch,
    setPlayerLocation,
    decrementPlayerTorch,
    pickupItem,
    dropItem,
};
