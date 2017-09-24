import React, { Component } from "react";

export default class CountDown extends Component {
  render() {
    return (
      <div className="timer">
        <div className="block mins" style={{ backgroundColor: this.props.backgroundColor }}>
          {this.props.mins}
        </div>
        <div className="block secs" style={{ backgroundColor: this.props.backgroundColor}}>
          {this.props.secs}
        </div>
      </div>
    );
  }
}
