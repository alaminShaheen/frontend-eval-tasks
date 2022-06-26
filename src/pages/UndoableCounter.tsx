import { Header } from "components/Header";
import { UndoAbleCounterContainer } from "components/UndoAbleCounter/UndoableCounterContainer";
import React from "react";

export const UndoAbleCounter = () => {
    return (
        <div>
            <Header title="Undoable Counter" />
            <UndoAbleCounterContainer />
        </div>
    );
};
