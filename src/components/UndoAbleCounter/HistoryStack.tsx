import { HistoryStackElement } from "models/UndoAbleCounter/HistoryStackElement";
import React, { useEffect, useRef } from "react";

type HistoryStackProps = {
    history: HistoryStackElement[];
};

export const HistoryStack = (props: HistoryStackProps) => {
    const { history } = props;
    const historyListRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (historyListRef.current) {
            historyListRef.current.scrollTo({
                top: -historyListRef.current.scrollHeight,
                behavior: "smooth",
            });
        }
    }, [history]);

    return (
        <div className="history-container">
            <h2 className="history-title">History Log</h2>
            <ul className="history-logs" ref={historyListRef}>
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
