import { Player, defaultPlayerProps } from "../player";
import {
  lostInALabyrinth,
  starSeparator,
  cannotRelightTorch,
  itemsOnGround,
} from "../story";
import { getItemsInRoom } from "../map/utils";

const isPlayerEqualToDefaultValues = (player: Player): boolean => {
  return (
    player.isTorchLit === defaultPlayerProps.isTorchLit &&
    player.location === defaultPlayerProps.location &&
    player.movesLeftForLitTorch === defaultPlayerProps.movesLeftForLitTorch
  );
};

const calculateText = (player: Player): string[] => {
  const { movesLeftForLitTorch, items, location } = player;

  if (isPlayerEqualToDefaultValues(player)) {
    return [starSeparator(), lostInALabyrinth()];
  }

  if (movesLeftForLitTorch === 0) {
    alert(cannotRelightTorch({ alertVersion: true }));
    return [cannotRelightTorch()];
  }

  const itemsInCurrentRoom = getItemsInRoom(location);

  if (itemsInCurrentRoom.length > 0) {
    return [itemsOnGround()];
  }

  return [];
};

export { isPlayerEqualToDefaultValues, calculateText };
