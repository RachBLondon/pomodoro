import React, { Component } from 'react'

//issue with chrome 
// fix with Date.now (maybe do to string)
// chrome storage does not save dates objects well
// https://bugs.chromium.org/p/chromium/issues/detail?id=161319


export default class Timer extends Component{
    
    constructor(props){
        super(props);
            this.state = {startTime: Date.now(), isTimerRunning: false}
    }

    startTimer(){
        this.setState({startTime: Date.now(), isTimerRunning : true})
        this.timer = setInterval(()=>{
           this.tick()
        }, 1)
    }

    stopTimer(){
        this.setState({isTimerRunning : false})
        clearInterval(this.timer)
    }

    tick(){
        if(this.state.startTime){
            this.setState({timeElapsed : Date.now() - this.state.startTime })
        }
    }
    
    render(){
        return <div style={{height : '100px'}}>
                    <span className="startTime">State Start Time{this.state.startTime}</span>
                    <span className="elapsedTime">Elapsed Time {this.state.timeElapsed}</span>
                    {!this.state.isTimerRunning && 
                        <button className="startBtn" onClick={this.startTimer.bind(this)}> Start</button>
                    }
                    {this.state.isTimerRunning &&
                        <button className="stopBtn" onClick={this.stopTimer.bind(this)}>Stop </button>                       
                    }
                </div>
    }
}

