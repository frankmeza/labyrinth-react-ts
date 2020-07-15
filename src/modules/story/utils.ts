import { Player, defaultPlayerProps, setPlayerTorch } from "../player";
import {
    lostInALabyrinth,
    starSeparator,
    cannotRelightTorch,
    itemsOnGround,
} from "../story";
import { getItemsInRoom } from "../map/utils";
import { MATCHES } from "../constants";

export interface CalculateTextMetadata {
    readonly text: string[];
    readonly playerUpdated?: Player;
}

const isPlayerEqualToDefaultValues = (player: Player): boolean => {
    return (
        player.isTorchLit === defaultPlayerProps.isTorchLit &&
        player.location === defaultPlayerProps.location &&
        player.movesLeftForLitTorch === defaultPlayerProps.movesLeftForLitTorch
    );
};

const calculateText = (player: Player): CalculateTextMetadata => {
    const { movesLeftForLitTorch, items, location } = player;
    const hasMatches = items.includes(MATCHES);

    if (isPlayerEqualToDefaultValues(player)) {
        return {
            text: [starSeparator(), lostInALabyrinth()],
        };
    }

    if (movesLeftForLitTorch === 0) {
        const goodThingBro =
            "GOOD THING YOU HAVE MATCHES TO RELIGHT YOUR TORCH!!!!";

        if (hasMatches && confirm(goodThingBro)) {
            const playerUpdated = setPlayerTorch(player, true);

            return {
                playerUpdated,
                text: [goodThingBro],
            };
        }

        alert(cannotRelightTorch({ alertVersion: true }));

        return {
            text: [cannotRelightTorch()],
        };
    }

    const itemsInCurrentRoom = getItemsInRoom(location);

    if (itemsInCurrentRoom.length > 0) {
        return {
            text: [itemsOnGround({ wantsMoreSpace: true })],
        };
    }

    return { text: [] };
};

export { isPlayerEqualToDefaultValues, calculateText };
