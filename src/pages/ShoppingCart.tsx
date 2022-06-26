import { Header } from "components/Header";
import { ShoppingCartContainer } from "components/ShoppingCart/ShoppingCartContainer";
import React, { Fragment } from "react";

export function ShoppingCart() {
    return (
        <Fragment>
            <Header title="My Shopping List" />
            <ShoppingCartContainer />
        </Fragment>
    );
}
