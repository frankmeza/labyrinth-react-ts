import React from "react";
import "../app.scss";
import { roomsMap } from "../modules/map";

interface RoomViewProps {
  readonly roomName: string;
}

const RoomView = (props: RoomViewProps): JSX.Element => {
  const { roomName } = props;
  const { name, art } = roomsMap[roomName];

  return (
    <div className="room-view">
      <pre>{name}</pre>
      <pre>{art}</pre>
    </div>
  );
};

export default RoomView;
