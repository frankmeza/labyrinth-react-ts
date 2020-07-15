import React, { useState, useEffect } from "react";
import "../app.scss";
import { uuidv4 } from "../modules/shared_utils";
import { CalculateTextMetadata } from "../modules/story/utils";
import { Player } from "../modules/player";

type UpdatePlayerCallbackFn = (updatedPlayer: Player) => void

interface MenuViewProps {
    readonly textMetadata: CalculateTextMetadata;
    readonly updatePlayer: UpdatePlayerCallbackFn;
}

const defaultLines: string[] = [];

const MenuView = (props: MenuViewProps): JSX.Element => {
    const { textMetadata, updatePlayer } = props;
    const { text, playerUpdated } = textMetadata;

    if (playerUpdated) {
        updatePlayer(playerUpdated);
    }

    const [lines, setLines] = useState(defaultLines);

    // prettier-ignore
    useEffect(() => {
    setLines([...text, ...lines])
  }, [textMetadata]);

    const newOutput = lines.map(line => {
        const key = uuidv4();
        return <pre key={key}>{line}</pre>;
    });

    return <div className="menu-view">{newOutput}</div>;
};

export default MenuView;
