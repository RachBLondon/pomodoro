import React, {Component} from 'react'

export default class CountDown extends Component {

    componentWillUnmount(){
        chrome.runtime.sendMessage("closing timers")
    }

    render(){
        return <div className="count-down">
                    <h2> Time left </h2>
                    <div className="row">
                        <div className="col">
                            <p className="mins">{this.props.timers.mins} Mins</p>
                        </div>
                        <div className="col">
                            <p className="secs">{this.props.timers.secs} Seconds</p>
                        </div>
                    </div>
                </div>
    }
}