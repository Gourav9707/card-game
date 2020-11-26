import React from 'react'
import '../App.css';

function Target(props) {
    return (
        <div className="target-zone" onDrop={props.drop} onDragOver={props.allowDrop}>
        <p>Deck</p>
        <div className="target" id="SPADES" onDrop={props.drop} onDragOver={props.allowDrop}>
            SPADES
        </div>
        <div className="target" id="HEARTS" onDrop={props.drop} onDragOver={props.allowDrop}>
            HEARTS
        </div>
        <div className="target" id="CLUBS" onDrop={props.drop} onDragOver={props.allowDrop}>
            CLUBS
        </div>
        <div className="target" id="DIAMONDS" onDrop={props.drop} onDragOver={props.allowDrop}>
            DIAMONDS
        </div>
        </div>
    )
}

export default Target
