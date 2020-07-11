import React from "react";
import "../app.scss";
import { Item, getItemByKey } from "../modules/item";

interface ItemsViewProps {
    readonly itemNames: string[];
}

const ItemsView = (props: ItemsViewProps): JSX.Element => {
    const { itemNames } = props;
    const items = itemNames.map(getItemByKey);

    const renderItem = (item: Item): JSX.Element => {
        const { name, description, art, location } = item;

        return (
            <div>
                <pre>{name}</pre>
                <pre>{description}</pre>
                <pre>{art}</pre>
                <pre>{location}</pre>
            </div>
        );
    };

    return <div className="room-view">{items.map(renderItem)}</div>;
};

export default ItemsView;
