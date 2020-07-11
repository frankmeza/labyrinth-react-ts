import React from "react";
import "../app.scss";
import { Item } from "../modules/item";
import { getPlayerItems, getRoomItems } from "../modules/item/utils";

interface ItemsViewProps {
    readonly itemNames: string[];
    readonly playerLocation: string;
    readonly isPlayerItems: boolean;
}

const ItemsView = (props: ItemsViewProps): JSX.Element => {
    const { isPlayerItems, itemNames, playerLocation } = props;

    const viewTitle = isPlayerItems
        ? "PLAYER ITEMS"
        : `found in ${playerLocation}`;

    const items = isPlayerItems
        ? getPlayerItems()
        : getRoomItems(playerLocation);

    const renderItem = (item: Item): JSX.Element => {
        const { name, description, art } = item;

        return (
            <React.Fragment>
                <pre>{name}</pre>
                <pre>{description}</pre>
                <pre>{art}</pre>
            </React.Fragment>
        );
    };

    return (
        <div className="room-view">
            {viewTitle}
            {items.map(renderItem)}
        </div>
    );
};

export default ItemsView;
