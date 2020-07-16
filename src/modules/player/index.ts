import {
    MATCHES,
    STARTING_ROOM,
    MAX_MOVES_BEFORE_MATCHES_NEEDED,
} from "../constants";

export interface Player {
    readonly isTorchLit: boolean;
    readonly location: string;
    readonly movesLeftForLitTorch: number;
    readonly items: string[];
}

export interface PlayerProps {
    readonly isTorchLit: boolean;
    readonly location: string;
    readonly movesLeftForLitTorch: number;
    readonly items: string[];
}

const defaultPlayerProps: PlayerProps = {
    isTorchLit: true,
    location: STARTING_ROOM,
    movesLeftForLitTorch: MAX_MOVES_BEFORE_MATCHES_NEEDED,
    items: [MATCHES],
};


export {
    // Player,
    // PlayerProps,
    defaultPlayerProps,
};
