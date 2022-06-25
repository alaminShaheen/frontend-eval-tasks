import React from 'react';
import {Header} from "components/Header";
import {UndoableCounterContainer} from "components/UndoableCounter/UndoableCounterContainer";

export const UndoableCounter = () => {
    return (
	<div>
	    <Header title="Undoable Counter"/>
	    <UndoableCounterContainer/>
	</div>
    );
};
