import React, { Component } from "react";
import CountDown from "./countDown.js";
import { FOCUS_TIME } from "./../../utils.js";
import {
  startTimer,
  tick,
  stopTimer,
  getTime,
  inMinsAndSecs
} from "./../../utils";

//TODO only us sinon-chrome in test env
// import chrome from 'sinon-chrome'

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { timeElapsed: 0, isTimerRunning: false };
  }

  ticker() {
    setInterval(() => {
      chrome.runtime.sendMessage("getTime", state => {
        this.setState({
          timeElapsed: state.timeElapsed,
          isTimerRunning: state.isTimerRunning
        });
        if (state.timeElapsed >= FOCUS_TIME) {
          this.stopTimer();
        }
      });
    }, 1000);
  }

  componentWillMount() {
    chrome.runtime.sendMessage("getTime", state => {
      if (state.isTimerRunning) {
        if(state.timeElapsed > FOCUS_TIME){
          //TODO handle done case here
          return
        }
        this.setState({ isTimerRunning: true, timeElapsed: state.timeElapsed });
        this.ticker();
      }
    });
  }

  startTimer() {
    chrome.runtime.sendMessage("startTimer", response => {
      this.setState({ isTimerRunning: true, timeElapsed : 0 });
      this.ticker();
    });
  }

  stopTimer() {
    chrome.runtime.sendMessage("stopTimer", response => {
      this.setState({ isTimerRunning: false });
    });
  }

  getBackgroundColor(FOCUS_TIME){
    const countDownTime = FOCUS_TIME - this.state.timeElapsed
    if ((countDownTime > (FOCUS_TIME * 0.1)) && (countDownTime < (FOCUS_TIME * 0.3))){
      return 'orange'
    }
    if(countDownTime > (FOCUS_TIME * 0.1)){
      return 'blue'
    }
    return 'red'
  }

  render() {
    return (
      <div style={{ height: "200px", margin: "30px" }}>
        <h1> Get s**t done </h1>

        {this.state.isTimerRunning && (
          <div className="timer">
            <div className="block mins" style={{backgroundColor: this.getBackgroundColor(FOCUS_TIME) }}>
              {inMinsAndSecs(FOCUS_TIME - this.state.timeElapsed).mins}
            </div>
            <div className="block secs" style={{backgroundColor: this.getBackgroundColor(FOCUS_TIME)}}>
              {inMinsAndSecs(FOCUS_TIME - this.state.timeElapsed).secs}
            </div>
          </div>
        )}

        {!this.state.isTimerRunning && (
          <button className="startBtn" onClick={this.startTimer.bind(this)}>
            Start
          </button>
        )}

        {this.state.isTimerRunning && (
          <button className="stopBtn" onClick={this.stopTimer.bind(this)}>
            Stop
          </button>
        )}

      </div>
    );
  }
}
