import React from 'react'
import SetNameComponent from "./SetNameComponent";

function InputPanel(props) {
    return (
        <div style={{ backgroundColor:'grey', width: 600}}>
            I'm InputPanel Component
            <SetNameComponent playerNumber='One'/>
            <SetNameComponent playerNumber='Two'/>
        </div>
    );
}

export default InputPanel