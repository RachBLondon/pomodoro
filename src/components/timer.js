import React, { Component } from 'react'
import CountDown from './countDown.js'
import { FOCUS_TIME } from './../../utils.js'

//issue with chrome 
// fix with Date.now (maybe do to string)
// chrome storage does not save dates objects well
// https://bugs.chromium.org/p/chromium/issues/detail?id=161319

//attach background script, figure out how to run the timers in there,
//maybe its better to run the timers from there - although could be issues
//with chrome.storage.get?

export function inMinsAndSecs(ms){
    const mins = Math.floor(ms / 60000)
    const secs = (ms % 60000 / 1000).toFixed(0)/1
    return {
        mins : mins,
        secs : secs
    }
}

export default class Timer extends Component{
    
    constructor(props){
        super(props);
            this.state = {startTime: Date.now(), isTimerRunning: false}
    }
    

    componentWillMount(){
        chrome.runtime.sendMessage("first message")
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

        const timers = inMinsAndSecs(FOCUS_TIME - this.state.timeElapsed)
        return <div style={{height : '100px'}}>

        
                    { this.state.isTimerRunning &&
                           <CountDown
                                timers={timers} 
                                />
                    }
                    {!this.state.isTimerRunning && 
                        <button className="startBtn" onClick={this.startTimer.bind(this)}> Start</button>
                    }
                    {this.state.isTimerRunning &&
                        <button className="stopBtn" onClick={this.stopTimer.bind(this)}>Stop </button>                       
                    }
                </div>
    }
}

