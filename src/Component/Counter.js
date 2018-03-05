import React,{ Component } from "react";
import { PropTypes } from "prop-types";

export class Counter extends Component
{
  static propTypes={
    index: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    updatePlayerScore: PropTypes.func.isRequired,
  }
 render()
  {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={()=>this.props.updatePlayerScore(this.props.index,-1)}> - </button>
        <div className="counter-score">{this.props.score}</div>
        <button className="counter-action increment" onClick={()=>this.props.updatePlayerScore(this.props.index,1)}> + </button>
    </div>
    );
  }
}