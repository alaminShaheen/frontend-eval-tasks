import React, { useCallback, useState } from "react";
import { HistoryStackElement } from "models/UndoableCounter/HistoryStackElement";

type HistoryStackProps = {
    history: HistoryStackElement[];
};

export const HistoryStack = (props: HistoryStackProps) => {
    const { history } = props;

    return (
        <div className="history-container">
            <h2 className="history-title">History Log</h2>
            <ul className="history-logs">
                {history.map(({ change, from, to }) => (
                    <li
                        className="log-element"
                        key={`${change}   ${from} --> ${to}`}
                    >
                        <span className="change">
                            {change}
                            {"   "}
                        </span>
                        <span>
                            {from} {" -->  "} {to}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
