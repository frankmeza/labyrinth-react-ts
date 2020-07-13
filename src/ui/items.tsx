import React, { useState } from "react";
import "../app.scss";
import { Item } from "../modules/item";
import { getPlayerItems, getRoomItems } from "../modules/item/utils";

type ItemHandler = (itemName: string) => void;

interface ItemsViewProps {
    readonly playerLocation: string | null;
    readonly itemHandler: ItemHandler;
}

// TODO: add click arrows to sides of UI to scroll through items list
const ItemsView = (props: ItemsViewProps): JSX.Element => {
    const { playerLocation, itemHandler } = props;

    const [itemToDisplayIndex, setItemToDisplayIndex] = useState(0);

    const items = !!playerLocation
        ? getRoomItems(playerLocation)
        : getPlayerItems();

    const viewTitle = !!playerLocation
        ? `found in ${playerLocation}`
        : "PLAYER ITEMS";

    const setNextItemVisible = () => {
        setItemToDisplayIndex(itemToDisplayIndex + 1);
    };

    const setPreviousItemVisible = () => {
        setItemToDisplayIndex(itemToDisplayIndex - 1);
    };

    const renderButton = (
        className: string,
        text: string,
        onClick: () => void,
    ): JSX.Element => {
        return (
            <button className={className} onClick={onClick}>
                <pre>{text}</pre>
            </button>
        );
    };

    const renderItemHandlerButton = (
        className: string,
        text: string,
        itemHandler: ItemHandler,
        itemName: string | null,
    ): JSX.Element => {
        if (!itemName) {
            return <div />;
        }

        const onClick = () => itemHandler(itemName);

        return (
            <button className={className} onClick={onClick}>
                <pre>{text}</pre>
            </button>
        );
    };

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

    const hasItemsInList = Object.values(items).length > 0;

    const hasPreviousItem = hasItemsInList && items[itemToDisplayIndex - 1];
    const hasNextItem = hasItemsInList && items[itemToDisplayIndex + 1];

    const previousItemButton = renderButton(
        "previous-button buttons",
        "PREVIOUS",
        setPreviousItemVisible,
    );

    const nextItemButton = renderButton(
        "next-button buttons",
        "NEXT",
        setNextItemVisible,
    );

    const displayedItem = items[itemToDisplayIndex];
    const itemName = !!displayedItem ? displayedItem.name : null;

    const pickupItemButton = renderItemHandlerButton(
        "pickup-item-button buttons",
        "PICKUP ITEM",
        itemHandler,
        itemName,
    );

    const dropItemButton = renderItemHandlerButton(
        "drop-item-button buttons",
        "DROP ITEM",
        itemHandler,
        itemName,
    );

    const isRoomItems = !!playerLocation;

    return (
        <div className="room-view">
            {hasPreviousItem && previousItemButton}
            {viewTitle}
            {hasNextItem && nextItemButton}
            {!!displayedItem && renderItem(displayedItem)}
            {!isRoomItems && dropItemButton}
            {isRoomItems && pickupItemButton}
        </div>
    );
};

export default ItemsView;
