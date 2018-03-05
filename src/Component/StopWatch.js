import React,{Component} from "react";

export class StopWatch extends Component
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
      //this.state.elapseTime= this.state.elapseTime+1;
      
      this.setState({
        elapseTime: this.state.elapseTime+1
        });
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