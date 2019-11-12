import React, {Component} from 'react'
import Player from "./Player";
import InputPanel from "./InputPanel";
import SetNameComponent from "./SetNameComponent";

class GameAdmin extends Component{

    constructor(props) {
        super(props);
        this.state = { user1Name: 'Jan',
                        user2Name: 'Anna',
                        activePlayer: [1,0]} //1 user is playing, 0 user is not playing
        this.player1NameHandler = this.player1NameHandler.bind(this);
        this.player2NameHandler = this.player2NameHandler.bind(this);
        this.playerClickButtonHandler = this.playerClickButtonHandler.bind(this);
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

    playerClickButtonHandler(e){
        var whoClicked = e.target.name;
        if (whoClicked === 'One') {
            this.setState((prevState, props) => ({
                activePlayer: [1,0]
            }))
        } else if (whoClicked === 'Two') {
            this.setState((prevState, props) => ({
                activePlayer: [0,1]
            }))
        }

    }

    render() {
        return (
            <div style={{ backgroundColor:'green' }}>
                I’m Admin component
                <Player playerNumber='One' playerName={this.state.user1Name} playerStatus={this.state.activePlayer[0]} playedNumberOftimes='5' onClickButtonHandler={this.playerClickButtonHandler}/>
                <Player playerNumber='Two' playerName={this.state.user2Name} playerStatus={this.state.activePlayer[1]} playedNumberOftimes='6' onClickButtonHandler={this.playerClickButtonHandler}/>
                <hr/>
                <InputPanel playerOneName={this.state.user1Name}  playerOneNameHandler={this.player1NameHandler}
                            playerTwoName={this.state.user2Name} playerTwoNameHandler={this.player2NameHandler}
                />

            </div>
        );
    }
}

export default GameAdmin