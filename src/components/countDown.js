import React, {Component} from 'react'

export default class CountDown extends Component {

    render(){
        return <div className="count-down">
                    <h2> Time left </h2>
                    <div className="row">
                        <div className="col">
                            <p>{this.props.timers.mins} Mins</p>
                        </div>
                        <div className="col">
                            <p>{this.props.timers.secs} Seconds</p>
                        </div>
                    </div>
                </div>
    }
}