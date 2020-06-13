export interface Player {
  readonly isTorchLit: boolean;
  readonly location: string;
  readonly movesLeftForLitTorch: number;
}

export interface PlayerProps {
  readonly isTorchLit: boolean;
  readonly location: string;
  readonly movesLeftForLitTorch: number;
}

const defaultPlayerProps: PlayerProps = {
  isTorchLit: true,
  location: "Starting Room",
  movesLeftForLitTorch: 6,
};

const createPlayer = (props: PlayerProps = defaultPlayerProps): Player => {
  const { isTorchLit, location, movesLeftForLitTorch } = props;

  return {
    location,
    isTorchLit,
    movesLeftForLitTorch,
  };
};

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

export {
  // Player,
  // PlayerProps,
  defaultPlayerProps,
  createPlayer,
  setPlayerTorch,
  setPlayerLocation,
  decrementPlayerTorch,
};
