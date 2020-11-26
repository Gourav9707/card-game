import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Home from './Home';


function exm(props) {
    return (
        <DndProvider backend={HTML5Backend}>
			<Home dt={props}/>
		</DndProvider>
    )
}

export default exm
