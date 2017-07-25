import React, { Component } from 'react'

const interval = 1000
const limit = 15
//TODO remove counter and only use state
let counter = 0
let recoder

export function getTimeElapsed(startTime){
    const currentTime = new Date()
    return currentTime - startTime
}

export default class Timer extends Component{
    constructor(props) {
        super(props)
        this.state = {startTime : null}
        this.startTimer = this.startTimer.bind(this)
    }

    componentWillMount(){
        chrome.storage.sync.get('startTime', (startTime)=>{
            console.log("startTime :", startTime)
            this.setState({startTime : startTime})
            console.log("afterSetate", this.state)
        })
    }

    componentWillUnmount(){
        chrome.storage.sync.set({'startTime': this.state.startTime})
    }
    //TODO save all state in chrome storage on component will unmount
    startTimer(){
        chrome.storage.local.get(function(result){console.log("lajfdlskflks", result)})
        const startTime = new Date()
        // console.log('this statTiemrs',this )
        console.log("typeof ", typeof startTime)
        this.setState({startTime : startTime})
        return startTime
    }

    getStartTime(){
        console.log("hdsf", typeof this.state.startTime)
        if(this.state.startTime !== null){
            console.log("in if ")
            return this.state.startTime.getSeconds()
        }
    }

    render(){
        // const secondsSinceStart = this.state.startTime.getSeconds() || ""
        console.log("render state :", this.state)
        return <div style={{height : '100px'}}>
                    <button onClick={this.startTimer}> button</button>
                    {this.getStartTime()}
                </div>
    }
}

