import React, { ChangeEvent, useCallback, useState } from "react";
import { ShoppingItem } from "models/ShoppingCart/ShoppingItem";
import ShoppingList from "components/ShoppingCart/ShoppingList";
import { Suggestions } from "components/ShoppingCart/Suggestions";
import "components/ShoppingCart/ShoppingCartContainer.css";

export const ShoppingCartContainer = () => {
    const [shoppingList, setShoppingList] = useState<Map<string, ShoppingItem>>(
        new Map(),
    );
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const fetchProducts = async (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);

        if (!searchTerm) {
            setSuggestions([]);
        }

        try {
            console.log("hello");

            const data = await fetch(
                `https://api.frontendeval.com/fake/food/${event.target.value}`,
            );
            const results = await data.json();
            setSuggestions(results);
        } catch (error) {
            console.log(error);
        }
    };

    const debounce = (
        fetchProducts: (event: ChangeEvent<HTMLInputElement>) => Promise<void>,
        timeout: number,
    ) => {
        let timer: NodeJS.Timeout;
        return (...args: [ChangeEvent<HTMLInputElement>]) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                fetchProducts.apply(this, args);
            }, timeout);
        };
    };

    const onSearchTermChange = debounce(fetchProducts, 500);

    const onSuggestionClick = useCallback(
        (item: string) => {
            if (!shoppingList.has(item)) {
                setShoppingList((prev) => {
                    const newMap = new Map(prev);
                    newMap.set(item, new ShoppingItem(item, false));
                    return newMap;
                });
            }
        },
        [shoppingList],
    );

    const onRemoveItem = useCallback((item: string) => {
        setShoppingList((prev) => {
            const newMap = new Map(prev);
            newMap.delete(item);
            return newMap;
        });
    }, []);

    const onCheckBoxChange = useCallback((item: string, checked: boolean) => {
        setShoppingList((prev) => {
            const newMap = new Map(prev);
            newMap.set(item, new ShoppingItem(item, checked));
            return newMap;
        });
    }, []);

    return (
        <div className="shopping-cart">
            <input onChange={onSearchTermChange} />
            <Suggestions
                onSuggestionClick={onSuggestionClick}
                searchTerm={searchTerm}
                suggestions={suggestions}
            />
            <ShoppingList
                onCheckBoxChange={onCheckBoxChange}
                onRemoveItem={onRemoveItem}
                shoppingItems={shoppingList}
            />
        </div>
    );
};
