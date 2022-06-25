import React from "react";
import { Header } from "components/Header";
import { UndoAbleCounterContainer } from "components/UndoAbleCounter/UndoAbleCounterContainer";

export const UndoAbleCounter = () => {
    return (
        <div>
            <Header title="Undoable Counter" />
            <UndoAbleCounterContainer />
        </div>
    );
};
