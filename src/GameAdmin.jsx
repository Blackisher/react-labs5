import React, {Component} from 'react'
import Player from "./Player";
import InputPanel from "./InputPanel";
import SetNameComponent from "./SetNameComponent";

class GameAdmin extends Component{

    constructor(props) {
        super(props);
        this.state = { user1Name: 'Jan',
                        user2Name: 'Anna'}
        this.player1NameHandler = this.player1NameHandler.bind(this);
        this.player2NameHandler = this.player2NameHandler.bind(this);
    }

    player1NameHandler(e){
        this.setState({
            user1Name: e.target.value
        })
    }

    player2NameHandler(e){
        this.setState({
            user2Name: e.target.value
        })
    }

    render() {
        return (
            <div style={{ backgroundColor:'green' }}>
                I’m Admin component
                <Player playerNumber='One' playerName={this.state.user1Name} buttonText='Play' playedNumberOftimes='5'/>
                <Player playerNumber='Two' playerName={this.state.user2Name} buttonText='This user is playing now' playedNumberOftimes='6'/>
                <hr/>
                <InputPanel playerOneName={this.state.user1Name}  playerOneNameHandler={this.player1NameHandler}
                            playerTwoName={this.state.user2Name} playerTwoNameHandler={this.player2NameHandler}
                />

            </div>
        );
    }
}

export default GameAdmin