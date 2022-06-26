import React from "react";
import { FaTrashAlt } from "react-icons/fa";

import { ShoppingItem } from "models/ShoppingCart/ShoppingItem";

type ShoppingListProps = {
    shoppingItems: Map<string, ShoppingItem>;
    onRemoveItem: (item: string) => void;
    onCheckBoxChange: (item: string, checked: boolean) => void;
};

export const ShoppingList = (props: ShoppingListProps) => {
    const { shoppingItems, onRemoveItem, onCheckBoxChange } = props;
    return (
        <div className="shopping-list">
            <h2 className="list-header">My List</h2>
            {shoppingItems.size > 0 ? (
                Array.from(shoppingItems.values()).map((value) => (
                    <div className="list-item">
                        <input
                            className="list-checkbox"
                            type="checkbox"
                            checked={value.checked}
                            onChange={() => onCheckBoxChange(value.title, !value.checked)}
                        />
                        <div onClick={() => onCheckBoxChange(value.title, !value.checked)}>
                            {value.title}
                        </div>
                        <div className="remove" onClick={() => onRemoveItem(value.title)}>
                            <FaTrashAlt size={16} />
                        </div>
                    </div>
                ))
            ) : (
                <div>Your shopping cart is empty</div>
            )}
        </div>
    );
};
