import React from 'react'

function Player(props) {
    return (
        <div style={{ backgroundColor:'yellow', borderWidth:1, border:'solid',  width: 600}}>
            Player {props.playerNumber} component <br/>
            Name: {props.playerName} <br/>
            Played number of times: {props.playedNumberOftimes} <br/>
            <button name={props.playerNumber} onClick={props.onClickButtonHandler} disabled={props.playerStatus === 1}>
                {props.playerStatus === 1 ? 'This user is playing now' : 'Play' }
            </button>
        </div>
    );
}

export default Player