import React,{ Component } from "react";
import PropTypes from "prop-types";

export class AddPlayerForm extends Component
{
  constructor(props)
  {
    super(props);
    this.state={
      name: "",
    };
  }

  static propTypes={
    addPlayer: PropTypes.func.isRequired,
  }

  addPlayer=(e)=>
  {
    e.preventDefault();
    this.props.addPlayer(this.state.name);
    this.setState({name: " "});
  }
  handleChange=(e)=>
  {
    this.setState({name: e.target.value});
    //console.log("changing",e.target.value)
  }
  render(){
    return (
      <div className="add-player-form">
        <form onSubmit={this.addPlayer}>
          <input type="text" value={this.state.name}  onChange={this.handleChange}/>
          <input type="submit" value="Add Player"/>
        </form>
      </div>
    );
  }
}