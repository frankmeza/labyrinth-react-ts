export interface Player {
  readonly isTorchLit: boolean;
  readonly location: string;
}

export interface PlayerProps {
  readonly isTorchLit: boolean;
  readonly location: string;
}

const defaultPlayerProps: PlayerProps = {
  isTorchLit: true,
  location: "Starting Room",
};

const createPlayer = (props: PlayerProps = defaultPlayerProps): Player => {
  const { isTorchLit, location } = props;

  return {
    location,
    isTorchLit,
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

export {
  // Player,
  // PlayerProps,

  // defaultPlayerProps,
  createPlayer,
  setPlayerTorch,
  setPlayerLocation,
};
