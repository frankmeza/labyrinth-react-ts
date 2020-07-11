import React from "react";
import "../app.scss";
import { Item } from "../modules/item";
import { getPlayerItems, getRoomItems } from "../modules/item/utils";

interface ItemsViewProps {
    readonly playerLocation: string | null;
}

const ItemsView = (props: ItemsViewProps): JSX.Element => {
    const { playerLocation } = props;

    const viewTitle = !!playerLocation
        ? `found in ${playerLocation}`
        : "PLAYER ITEMS";

    const items = !!playerLocation
        ? getRoomItems(playerLocation)
        : getPlayerItems();

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
