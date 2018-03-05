import React, { Component } from "react";
import PropTypes from "prop-types";
import { Counter } from "./Counter";

export class Player extends Component{
    static propTypes={
      name: PropTypes.string.isRequired,
      index: PropTypes.number.isRequired,
      score: PropTypes.number.isRequired,
      updatePlayerScore:PropTypes.func.isRequired,
      removePlayer:PropTypes.func.isRequired,
      selectPlayer: PropTypes.func.isRequired,

    }
    render()
    {
     return (
      <div className="players">
          <div className="player">
            <div className="player-name" 
                onClick={()=>this.props.selectPlayer(this.props.index)}>
               <a className="remove-player" 
                  onClick={()=> this.props.removePlayer(this.props.index)}>✖
                </a>
                  {this.props.name}
            </div>
            <div className="player-score">
            <Counter 
              index={this.props.index}
              score={this.props.score} 
              updatePlayerScore={this.props.updatePlayerScore}/>
          </div>
     </div>
    </div>
     );
    }
  }