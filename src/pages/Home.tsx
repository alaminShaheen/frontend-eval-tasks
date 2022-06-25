import React from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "constants/Routes";

import "pages/Home.css";

export function Home() {
    return (
        <div className="home">
            <div className="card">
                <Link to={ROUTES.UNDOABLE_COUNTER.path}>
                    {ROUTES.UNDOABLE_COUNTER.title}
                </Link>
            </div>
            <div className="card">
                <Link to={ROUTES.SHOPPING_CART.path}>
                    {ROUTES.SHOPPING_CART.title}
                </Link>
            </div>
        </div>
    );
}
