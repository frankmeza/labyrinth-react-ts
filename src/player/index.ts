interface Player {
  readonly isTorchLit: boolean;
  readonly location: string;
}

interface PlayerProps {
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

const setPlayerTorch = (p: Player, isTorchLit: boolean): Player => {
  return {
    ...p,
    isTorchLit,
  };
};

const setPlayerLocation = (p: Player, location: string): Player => {
  return {
    ...p,
    location,
  };
};

const player = createPlayer();

export { setPlayerLocation, player };
