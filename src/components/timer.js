import React, { Component } from 'react'
import CountDown from './countDown.js'
import { FOCUS_TIME } from './../../utils.js'
import chrome from 'sinon-chrome'

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
    

    

    componentWillMount(){
        chrome.runtime.sendMessage("component mounted")
    }


    startTimer(){
        chrome.runtime.sendMessage("startTimer")

    }



    
    render(){
                chrome.runtime.sendMessage("component rendered")
        chrome.runtime.sendMessage("closing timers")

   
        return <div style={{height : '100px'}}>
                        <button className="startBtn" onClick={this.startTimer}> Start</button>             
                        <button className="stopBtn">Stop </button>                                       
                </div>
    }
}

