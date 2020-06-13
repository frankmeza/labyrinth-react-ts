import { Player, defaultPlayerProps } from "../player";
import { lostInALabyrinth, starSeparator, cannotRelightTorch } from "../story";

const isPlayerEqualToDefaultValues = ({
  isTorchLit,
  location,
  movesLeftForLitTorch,
}: Player) => {
  const {
    isTorchLit: dTorch,
    location: dLocation,
    movesLeftForLitTorch: dMoves,
  } = defaultPlayerProps;

  return (
    isTorchLit === dTorch &&
    location === dLocation &&
    movesLeftForLitTorch === dMoves
  );
};

export const calculateText = (player: Player): string[] => {
  const { movesLeftForLitTorch } = player;

  if (isPlayerEqualToDefaultValues(player)) {
    return [
      starSeparator(),
      lostInALabyrinth(),
    ];
  }

  if (movesLeftForLitTorch === 0) {
    return [
      cannotRelightTorch(),
    ];
  }

  return [];
};
