import React, { Component } from "react";
import CountDown from "./countDown.js";
import { FOCUS_TIME } from "./../../utils.js";
import { startTimer, tick, stopTimer, getTime, inMinsAndSecs } from "./../../utils"

//TODO only us sinon-chrome in test env
// import chrome from 'sinon-chrome'





export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { timeElapsed: 0, isTimerRunning : false };
  }

  componentWillMount() {
    chrome.runtime.sendMessage("getTime", state => {
      console.log("component will mount state", state)
      console.log("isRunning ", state.isTimerRunning)

      //TODO if running
      if(state.isTimerRunning){
        console.log("is running yays")
        this.setState({isTimerRunning : true, startTime : state.startTime, timeElapsed : state.startTime - Date.now()})
      }

    

      //TODO if not running
    });
  }

  startTimer() {
    chrome.runtime.sendMessage("startTimer");
  }

  stopTimer() {
    chrome.runtime.sendMessage("stopTimer");
  }

  render() {
    return (
      <div style={{ height: "100px" }}>
        {this.state.isTimerRunning ? "Timer Running" : "Not running"}
        <p>StartTime {this.state.isTimerRunning && this.state.startTime}</p>
        <p>TimeElasped{this.state.isTimerRunning && this.state.timeElapsed}</p>
        <button className="startBtn" onClick={this.startTimer.bind(this)}>
          {" "}
          Start
        </button>
        <button className="stopBtn" onClick={this.stopTimer}>
          Stop{" "}
        </button>
      </div>
    );
  }
}
