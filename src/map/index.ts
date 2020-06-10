import {
  leftForwardRightRoom,
  forwardRightRoom,
  leftForwardRoom,
  leftRightRoom,
} from "../ascii/index";
import {
  STARTING_ROOM,
  ROOM_1,
  ROOM_2,
  ROOM_3,
  ROOM_4,
  ROOM_5,
  ROOM_6,
  FINAL_ROOM,
} from "../constants/index";

type RoomNumber = number;

interface ExitsMap {
  readonly [exitDirection: number]: RoomNumber;
}

interface Room {
  readonly name: string;
  readonly art: string;
  readonly exits: ExitsMap;
}

interface RoomsMap {
  readonly [roomName: string]: Room;
}

const createRoom = (name: string, art: string, exits: ExitsMap): Room => {
  return {
    name,
    art,
    exits,
  };
};

// EXITS
const exitsStartingRoom: ExitsMap = {
  0: 1,
  1: 2,
  2: 4,
  3: 5,
};

const exitsRoom1: ExitsMap = {
  1: 3,
  2: 0,
};

const exitsRoom2: ExitsMap = {
  0: 3,
  2: 6,
  3: 0,
};

const exitsRoom3: ExitsMap = {
  2: 2,
  3: 1,
};

const exitsRoom4: ExitsMap = {
  0: 0,
  1: 6,
  3: 7,
};

const exitsRoom5: ExitsMap = {
  1: 0,
  2: 7,
};

const exitsRoom6: ExitsMap = {
  0: 2,
  3: 4,
};

const exitsFinalRoom: ExitsMap = {
  0: 5,
  1: 4,
};

const startingRoom = createRoom(
  STARTING_ROOM,
  leftForwardRightRoom(),
  exitsStartingRoom,
);

const room1 = createRoom(ROOM_1, forwardRightRoom(), exitsRoom1);
const room2 = createRoom(ROOM_2, leftForwardRightRoom(), exitsRoom2);
const room3 = createRoom(ROOM_3, leftForwardRoom(), exitsRoom3);
const room4 = createRoom(ROOM_4, leftForwardRightRoom(), exitsRoom4);
const room5 = createRoom(ROOM_5, forwardRightRoom(), exitsRoom5);
const room6 = createRoom(ROOM_6, leftForwardRoom(), exitsRoom6);
const finalRoom = createRoom(FINAL_ROOM, leftRightRoom(), exitsFinalRoom);

const roomsMap: RoomsMap = {
  [`${STARTING_ROOM}`]: startingRoom,
  [`${ROOM_1}`]: room1,
  [`${ROOM_2}`]: room2,
  [`${ROOM_3}`]: room3,
  [`${ROOM_4}`]: room4,
  [`${ROOM_5}`]: room5,
  [`${ROOM_6}`]: room6,
  [`${FINAL_ROOM}`]: finalRoom,
};

export { roomsMap };
