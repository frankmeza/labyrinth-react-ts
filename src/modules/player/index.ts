import {
  MATCHES,
  STARTING_ROOM,
  MAX_MOVES_BEFORE_MATCHES_NEEDED,
} from "../constants";
import player from "../../core";

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
    items: ["all stolen by graverobbers"]
  }
}

const setPlayerTorch = (player: Player, isTorchLit: boolean): Player => {
  return {
    ...player,
    isTorchLit,
  };
};

const setPlayerLocation = (player: Player, location: string): Player => {
  return {
    ...player,
    location,
  };
};

const decrementPlayerTorch = (player: Player): Player => {
  const { movesLeftForLitTorch: movesLeft } = player;

  return {
    ...player,
    movesLeftForLitTorch: movesLeft - 1,
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
  // Player,
  // PlayerProps,
  defaultPlayerProps,
  createPlayer,
  killPlayer,
  setPlayerTorch,
  setPlayerLocation,
  decrementPlayerTorch,
  pickupItem,
  dropItem,
};
