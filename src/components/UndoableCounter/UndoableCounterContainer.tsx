import React, {useState} from 'react';
import "components/UndoableCounter/ComponentContainer.css"

const ComponentCounter = () => {
    const [count, setCount] = useState(0);

    return (
	<div className="undoable-counter">

	    <div className="undo-redo-section">
		<button className="btn btn-undo">Undo</button>
		<button className="btn btn-redo">Redo</button>
	    </div>

	    <div className="decremental-buttons">
		<button className="btn">-1</button>
		<button className="btn">-10</button>
		<button className="btn">-100</button>
	    </div>

	    <div className="counter-output">{count}</div>

	    <div className="incremental-buttons">
		<button className="btn">+1</button>
		<button className="btn">+10</button>
		<button className="btn">+100</button>
	    </div>
	</div>
    );
};

export default ComponentCounter;
