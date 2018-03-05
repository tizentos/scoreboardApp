import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as PlayerActionCreators from '../actions/player'



import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import { AddPlayerForm } from "../Component/AddPlayerForm";
import { Player } from "../Component/Player";
import { Header } from "../Component/Header";
import { PlayerDetail } from "../Component/PlayerDetail";



class Scoreboard extends Component {

  static propTypes={
    players: PropTypes.array.isRequired,
    selectedPlayerIndex: PropTypes.number.isRequired,

  }
 
  
  render() {

    const {dispatch,players,selectedPlayerIndex}=this.props;
    const addPlayer=bindActionCreators(PlayerActionCreators.addPlayer,dispatch);
    const removePlayer=bindActionCreators(PlayerActionCreators.removePlayer,dispatch);
    const updatePlayerScore=bindActionCreators(PlayerActionCreators.updatePlayerScore,dispatch);
    const selectPlayer=bindActionCreators(PlayerActionCreators.selectPlayer,dispatch);
    
    let selectedPlayer;
    if (selectedPlayerIndex!== -1){
      selectedPlayer=players[selectedPlayerIndex];
    }

    const playerComponent=players.map((player,index)=>(
      <Player
        name={player.name}
        index={index}
        score={player.score}
        key={player.id}
        updatePlayerScore={updatePlayerScore}
        removePlayer={removePlayer}
        selectPlayer={selectPlayer} />

    ));


    return (
      <div className="scoreboard">
        <Header players={players}/>
        {playerComponent}
        <AddPlayerForm  addPlayer={addPlayer}/>
        <PlayerDetail selectedPlayer={selectedPlayer} />
    </div>
    );
  }
}

const mapStateToProps=state=>(
  {
    players: state.players,
    selectedPlayerIndex: state.selectedPlayerIndex
  }
)

export default connect(mapStateToProps)(Scoreboard);