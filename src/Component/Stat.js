import React,{ Component } from "react";
import { PropTypes } from "prop-types";

export class Stat extends Component
{
  static propTypes={
    players: PropTypes.array.isRequired
  }
  totalPlayers=()=>
  {
     return this.props.players.length;
  }

  totalPoint=()=>
  {
    return(this.props.players.reduce((sum,player)=>
    {return sum+player.score} ,0));
  }
  render()
  {
    return(
      <table className="stat">
        <tbody>
          <tr>
            <td>Players:</td>
            <td>{this.totalPlayers()}</td>
          </tr>
          <tr>
            <td>Total:</td>
            <td>{this.totalPoint()}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

