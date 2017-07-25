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
        // chrome.storage.sync.set({'startTime': null}, function(){

            chrome.storage.sync.get('startTime', (startTime)=>{
                console.log("chrome get ", startTime)
                this.setState(startTime)
            })

        // })
    }

    //TODO save all state in chrome storage on component will unmount
    // componentWillUnmount(){
    //     console.log("in componne will unmount " )
    //     chrome.storage.sync.set({'startTime': this.state.startTime}, function(){
    //         message('saved settings')
    //     })
    // }
    startTimer(){
        const startTime = new Date()
        this.setState({startTime : startTime})
        return startTime
    }

    getStartTime(){
        if(this.state.startTime){
            console.log("in if getStartTime ", this.state)
            return this.state.startTime.getSeconds()
        }
    }

    render(){
        // const secondsSinceStart = this.state.startTime.getSeconds() || ""
        console.log("render state :", this.state)
        return <div style={{height : '100px'}}>
                    <button onClick={this.startTimer}> button</button>
                    <span className="startTime">{this.getStartTime()}</span>
                </div>
    }
}

