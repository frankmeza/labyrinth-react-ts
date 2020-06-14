const { isPlayerEqualToDefaultValues, calculateText } = require("./utils");
// import { isPlayerEqualToDefaultValues, calculateText } from "./utils";

console.log(this)

describe("isPlayerEqualToDefaultValues", () => {
  test("returns TRUE if player props are equal to default", () => {
    const playerWithDefaultProps = {
      isTorchLit: true,
      location: "Starting Room",
      movesLeftForLitTorch: 6,
      items: ["matches"],
    };

    const actual = isPlayerEqualToDefaultValues(playerWithDefaultProps);
    expect(actual).toBe(true);
  });

  test("returns FALSE if player props are NOT equal to default", () => {
    const playerWithDifferentProps = {
      isTorchLit: true,
      location: "Final Room",
      movesLeftForLitTorch: 6,
      items: [""],
    };

    const actual = isPlayerEqualToDefaultValues(playerWithDifferentProps);
    expect(actual).toBe(false);
  });
});

describe("calculateText", () => {
  test("functions", () => {
    // todo
  });
});

