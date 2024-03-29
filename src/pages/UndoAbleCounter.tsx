import React from "react";

import { Header } from "components/Header";
import { UndoAbleCounterContainer } from "components/UndoAbleCounter/UndoAbleCounterContainer";

export const UndoAbleCounter = () => {
    return (
        <div>
            <Header title="UndoAble Counter" />
            <UndoAbleCounterContainer />
        </div>
    );
};
