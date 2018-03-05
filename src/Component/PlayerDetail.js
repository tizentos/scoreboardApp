import React, { Component } from 'react';
import { PropTypes } from "prop-types";


export class PlayerDetail extends Component {

  static proptypes={
    selectedPlayer: PropTypes.object
  }
 render()
 {
   let selectedPlayer=this.props.selectedPlayer;
  if (selectedPlayer){
    return (
      <div>
        <h3>{selectedPlayer.name}</h3>
        <ul>
          <li>
            <span>Score: </span> 
            {selectedPlayer.score }
          </li>
          <li>
            <span>Created: </span> 
            {selectedPlayer.created }
          </li>
          <li>
            <span>Updated: </span> 
            {selectedPlayer.updated }
          </li>        
        </ul>
      </div>
    );
  }
  else {
    return (<p>Click on a player to see more details</p>);
  }
}
};

