import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

export var   PLAYERS=[
  {
    name: "Jim Hoskins",
    score: 33,
    id:10
  },
  {
    name: "Jim Andrew",
    score: 33,
    id:2
  },
  {
    name: "Chalkey Hoskins",
    score: 33,
    id:3
  },
  {
    name: "Andrew Chalkey",
    score: 33,
    id:40
  },
  {
    name: "Tosin Jemilehin",
    score: 33,
    id:5
  },
]

class StopWatch extends Component
{
  constructor(props)
  {
    super(props)
    this.state={
      isRunning: false,
      elapseTime: 0,
    }
  }
  componentDidMount=()=>{
    this.interval= setInterval(this.onTick,1000);
  }
  componentWillUnmount=()=>{
      clearInterval(this.interval);
  }
  onTick=()=>
  {
    if (this.state.isRunning)
    {
      this.state.elapseTime= this.state.elapseTime+1;
      this.setState(this.state);
    }
  }
  onStart=()=>{
    this.setState({
      isRunning: !this.state.isRunning,
    })
  }
  onStop=()=>{
    this.setState({
      isRunning: !this.state.isRunning,
    });
  }
  onReset=()=>
  {
    this.setState({
      isRunning: true,
      elapseTime: 0,
    });
  }
  render()
  {
    return(
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <div className="stopwatch-timer">{this.state.elapseTime}</div>
        {
          this.state.isRunning?
          <button onClick={this.onStop}>Stop</button> :
          <button onClick={this.onStart}>Start</button>
        }
        <button onClick={this.onReset}>Reset</button>
      </div>
    );
  }
}
class Stat extends Component
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

class AddPlayerForm extends Component
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

  handleSubmit=(e)=>
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
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.name}  onChange={this.handleChange}/>
          <input type="submit" value="Add Player"/>
        </form>
      </div>
    );
  }
}
//Header component
class Header extends React.Component{
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



 //Player component
class Player extends React.Component{
  static propTypes={
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    onScoreChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
  }
  render()
  {
   return (
    <div className="players">
        <div className="player">
          <div className="player-name">
             <a className="remove-player" onClick={this.props.onRemove}>✖ </a>
             {this.props.name}
          </div>
          <div className="player-score">
          <Counter score={this.props.score} onChange={this.props.onScoreChange}/>
        </div>
   </div>
  </div>
   );
  }
}



class Counter extends React.Component
{
  static propTypes={
    score: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
  }
 handleClickDecrement=()=>{ this.props.onChange(-1); }
 handleClickIncrement=()=>{ this.props.onChange(1); }
 render()
  {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.handleClickDecrement}> - </button>
        <div className="counter-score">{this.props.score}</div>
        <button className="counter-action increment" onClick={this.handleClickIncrement}> + </button>
    </div>
    );
  }
}


export class App extends Component {
  static propTypes={
    title: PropTypes.string,
    initialPlayers: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired
    }))
  }
  constructor(props)
  {
    super(props);
    this.state={
      players: this.props.initialPlayers
    }
  }
  onScoreChange=(index,delta)=>
    {
      this.props.initialPlayers[index].score+=delta;
      this.setState({players: this.props.initialPlayers});
    }
  addPlayer=(name)=>
  {
    this.state.players.push(
      {
        name: name,
        score: 30,
        id: this.state.players.length+1
      }
    );
    this.setState(this.state.players);
  }

  removePlayer=(index)=>{
    this.state.players.splice(index,1);
    this.setState(this.state);
  }
  
  render() {
    return (
      <div className="scoreboard">
      <Header players={this.state.players}/>
      {this.state.players.map((player,index)=>
        <Player name={player.name} score={player.score} key={player.id} 
        onRemove={this.removePlayer.bind(this,index)}
        onScoreChange={this.onScoreChange.bind(this,index)}/>
      )}
      <AddPlayerForm  addPlayer={this.addPlayer}/>
    </div>
    );
  }
}

//export default App;
