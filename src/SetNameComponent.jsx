import React from 'react'

function SetNameComponent(props) {
    return (
        <div style={{ backgroundColor:'grey' }}>
            Set Name of Player {props.playerNumber}:
            <input onChange={props.onchangeNameHandler} value={props.name}/>
        </div>
    );
}

export default SetNameComponent