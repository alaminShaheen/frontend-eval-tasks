import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ROUTES } from "constants/Routes";
import { Home } from "pages/Home";
import { ShoppingCart } from "pages/ShoppingCart";
import { UndoAbleCounter } from "pages/UndoAbleCounter";

import "./App.css";

export function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route
                        path={ROUTES.UNDOABLE_COUNTER.path}
                        element={<UndoAbleCounter />}
                    />
                    <Route
                        path={ROUTES.SHOPPING_CART.path}
                        element={<ShoppingCart />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
