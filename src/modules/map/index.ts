import {
  leftForwardRightRoom,
  forwardRightRoom,
  leftForwardRoom,
  leftRightRoom,
} from "../ascii";
import {
  STARTING_ROOM,
  ROOM_1,
  ROOM_2,
  ROOM_3,
  ROOM_4,
  ROOM_5,
  ROOM_6,
  FINAL_ROOM,
} from "../constants";

type RoomName = string;

interface ExitsMap {
  // VALUES: the room name found through that exit
  readonly [exitDirection: string]: RoomName;
}

export interface Room {
  readonly name: string;
  readonly art: string;
  readonly exits: ExitsMap;
}

export interface RoomsMap {
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
  TOP: ROOM_1,
  RIGHT: ROOM_2,
  BOTTOM: ROOM_4,
  LEFT: ROOM_5,
};

const exitsRoom1: ExitsMap = {
  RIGHT: ROOM_3,
  BOTTOM: STARTING_ROOM,
};

const exitsRoom2: ExitsMap = {
  TOP: ROOM_3,
  BOTTOM: ROOM_6,
  LEFT: STARTING_ROOM,
};

const exitsRoom3: ExitsMap = {
  BOTTOM: ROOM_2,
  LEFT: ROOM_1,
};

const exitsRoom4: ExitsMap = {
  TOP: STARTING_ROOM,
  RIGHT: ROOM_6,
  LEFT: FINAL_ROOM,
};

const exitsRoom5: ExitsMap = {
  RIGHT: STARTING_ROOM,
  BOTTOM: FINAL_ROOM,
};

const exitsRoom6: ExitsMap = {
  TOP: ROOM_2,
  LEFT: ROOM_4,
};

const exitsFinalRoom: ExitsMap = {
  TOP: ROOM_5,
  RIGHT: ROOM_4,
};

const startingRoom: Room = createRoom(
  STARTING_ROOM,
  leftForwardRightRoom(),
  exitsStartingRoom,
);

const room1: Room = createRoom(ROOM_1, forwardRightRoom(), exitsRoom1);
const room2: Room = createRoom(ROOM_2, leftForwardRightRoom(), exitsRoom2);
const room3: Room = createRoom(ROOM_3, leftForwardRoom(), exitsRoom3);
const room4: Room = createRoom(ROOM_4, leftForwardRightRoom(), exitsRoom4);
const room5: Room = createRoom(ROOM_5, forwardRightRoom(), exitsRoom5);
const room6: Room = createRoom(ROOM_6, leftForwardRoom(), exitsRoom6);
const finalRoom: Room = createRoom(FINAL_ROOM, leftRightRoom(), exitsFinalRoom);

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
