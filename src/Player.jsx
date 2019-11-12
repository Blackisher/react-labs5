import React from 'react'

function Player(props) {
    return (
        <div style={{ backgroundColor:'yellow', borderWidth:1, border:'solid',  width: 600}}>
            Player {props.playerNumber} component <br/>
            Name: {props.playerName} <br/>
            Played number of times: {props.playedNumberOftimes} <br/>
            <button>
                {props.buttonText}
            </button>
        </div>
    );
}

export default Player