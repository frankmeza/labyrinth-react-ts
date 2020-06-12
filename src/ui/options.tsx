import React from "react";
import "../app.scss";
import { roomsMap } from "../modules/map";

interface OptionsViewProps {
  readonly roomName: string;
  readonly updateLocation: (roomName: string) => void;
}

const OptionsView = (props: OptionsViewProps) => {
  const { roomName, updateLocation } = props;
  const { exits } = roomsMap[roomName];

  const renderOptionButton = (exitsKey: string) => {
    const displayText = exits[exitsKey];
    const onClick = () => updateLocation(displayText);

    return (
      <button
        key={exitsKey}
        value={displayText}
        onClick={onClick}
        className="options-location"
      >
        {exitsKey}
      </button>
    );
  };

  const generateLocationButtons = () => {
    const keys = Object.keys(exits);
    return keys.map(key => renderOptionButton(key));
  };

  const debugExits = `EXITS: ${JSON.stringify(exits, null, 4)}`;

  return (
    <div className="room-view">
      {/* DEBUGGER */}
      <pre>{debugExits}</pre>
      {/* DEBUGGER */}

      {generateLocationButtons()}
    </div>
  );
};

export default OptionsView;
