import React from 'react'
import Player from "./Player";
import InputPanel from "./InputPanel";

function GameAdmin(props) {
    return (
        <div style={{ backgroundColor:'green' }}>
            I’m Admin component
            <Player playerNumber='One' playerName='Jan' buttonText='Play' playedNumberOftimes='5'/>
            <Player playerNumber='Two' playerName='Anna' buttonText='This user is playing now' playedNumberOftimes='6'/>
            <hr/>
            <InputPanel/>
        </div>
    );
}

export default GameAdmin