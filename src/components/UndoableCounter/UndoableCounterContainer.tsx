import React, { MouseEvent, useState } from "react";
import { HistoryStackElement } from "models/UndoableCounter/HistoryStackElement";
import { HistoryStack } from "components/UndoableCounter/HistoryStack";
import "components/UndoableCounter/UndoableCounterContainer.css";

export const UndoableCounterContainer = () => {
    const [historyStack, setHistoryStack] = useState<HistoryStackElement[]>([]);
    const [undoStack, setRedoStack] = useState<HistoryStackElement[]>([]);

    const changeCount = (event: MouseEvent<HTMLButtonElement>) => {
        const amount = +(event.currentTarget.textContent || 0);
        setRedoStack([]);
        const currentCount =
            historyStack.length > 0
                ? historyStack[historyStack.length - 1].to
                : 0;
        const newStackElement = new HistoryStackElement(
            amount,
            currentCount,
            currentCount + amount,
        );
        setHistoryStack((prev) => [...prev, newStackElement]);
    };

    const undo = () => {
        const undoneAction = historyStack[historyStack.length - 1];
        setHistoryStack((prev) => {
            const arr = [...prev];
            arr.pop();
            return arr;
        });
        setRedoStack((prev) => [...prev, undoneAction]);
    };

    const redo = () => {
        const redoneTask = undoStack[undoStack.length - 1];
        setHistoryStack((prev) => [...prev, redoneTask]);
        setRedoStack((prev) => {
            const arr = [...prev];
            arr.pop();
            return arr;
        });
    };

    const clear = () => {
        setRedoStack([]);
        setHistoryStack([]);
    };

    return (
        <div className="undoable-counter">
            <div className="undo-redo-section">
                <button
                    className="btn btn-undo"
                    disabled={
                        historyStack.length === 0 || undoStack.length === 50
                    }
                    onClick={undo}
                >
                    Undo
                </button>
                <button
                    disabled={undoStack.length === 0}
                    className="btn btn-redo"
                    onClick={redo}
                >
                    Redo
                </button>
                <button
                    disabled={
                        historyStack.length === 0 && undoStack.length === 0
                    }
                    className="btn btn-redo"
                    onClick={clear}
                >
                    Clear
                </button>
            </div>

            <div className="counter">
                <div className="decremental-buttons">
                    <button onClick={changeCount} className="btn">
                        -1
                    </button>
                    <button onClick={changeCount} className="btn">
                        -10
                    </button>
                    <button onClick={changeCount} className="btn">
                        -100
                    </button>
                </div>

                <div className="counter-output">
                    {historyStack.length > 0
                        ? historyStack[historyStack.length - 1].to
                        : 0}
                </div>

                <div className="incremental-buttons">
                    <button onClick={changeCount} className="btn">
                        +1
                    </button>
                    <button onClick={changeCount} className="btn">
                        +10
                    </button>
                    <button onClick={changeCount} className="btn">
                        +100
                    </button>
                </div>
            </div>

            <HistoryStack history={historyStack} />
        </div>
    );
};
