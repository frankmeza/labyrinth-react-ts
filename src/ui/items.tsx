import React from "react";
import "../app.scss";
import { Item } from "../modules/item";
import { getItemByKey } from "../modules/item/utils";

interface ItemsViewProps {
    readonly itemNames: string[];
    readonly isPlayerItems: boolean;
}

const ItemsView = (props: ItemsViewProps): JSX.Element => {
    const { itemNames } = props;
    const items = itemNames.map(getItemByKey);

    const renderItem = (item: Item): JSX.Element => {
        const { name, description, art, location } = item;

        return (
            <React.Fragment>
                <pre>{name}</pre>
                <pre>{description}</pre>
                <pre>{art}</pre>
                <pre>{location}</pre>
            </React.Fragment>
        );
    };

    return <div className="room-view">{items.map(renderItem)}</div>;
};

export default ItemsView;
