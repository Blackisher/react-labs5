import React from 'react'
import SetNameComponent from "./SetNameComponent";

function InputPanel(props) {
    return (
        <div style={{ backgroundColor:'grey', width: 600}}>
            I'm InputPanel Component
            <SetNameComponent playerNumber='One' name={props.playerOneName} onchangeNameHandler={props.playerOneNameHandler}/>
            <SetNameComponent playerNumber='Two' name={props.playerTwoName} onchangeNameHandler={props.playerTwoNameHandler}/>
        </div>
    );
}

export default InputPanel