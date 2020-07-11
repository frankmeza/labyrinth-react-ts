import React from "react";
import "../app.scss";
import { roomsMap } from "../modules/map";

interface OptionsViewProps {
    readonly roomName: string;
    readonly updateLocation: (roomName: string) => void;
}

const OptionsView = (props: OptionsViewProps): JSX.Element => {
    const { roomName, updateLocation } = props;
    const { exits } = roomsMap[roomName];

    const renderOptionButton = (exitsKey: string): JSX.Element => {
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

    const generateLocationButtons = (): JSX.Element => {
        const keys = Object.keys(exits);
        return (
            <div className="options-location-container">
                {keys.map(key => renderOptionButton(key))}
            </div>
        );
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
