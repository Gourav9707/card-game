import { ClickAwayListener } from '@material-ui/core';
import React from 'react';

function cards(props) {
    return (
        <div id={props.type} onClick={()=>props.clicked(props.type)}><img src={props.image}/></div>      
    )
}

export default cards
