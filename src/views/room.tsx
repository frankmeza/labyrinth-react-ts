import React from "react";
import "./app.scss";

interface RoomViewerProps {
  readonly children: any;
}

const RoomViewer = (props: RoomViewerProps) => {
  const { children } = props;

  return <div className="room-viewer">{children}</div>;
};
