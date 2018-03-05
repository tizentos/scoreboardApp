import  React, { Component } from "react";
import PropTypes from "prop-types";
import { Stat } from "./Stat";
import { StopWatch } from "./StopWatch";

export class Header extends Component{
    static propTypes={
      title: PropTypes.string.isRequired,
      players: PropTypes.array.isRequired,
    }
    static defaultProps={
      title: "Scoreboard"
    }
    render()
   {
     return (
     <div className="header">
      <Stat players={this.props.players} />
      <h1>{this.props.title}</h1>
      <StopWatch />
    </div>);
   }
  }