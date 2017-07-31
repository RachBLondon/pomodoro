import React, { Component } from 'react'
import CountDown from './countDown.js'
import { FOCUS_TIME } from './../../utils.js'

export function inMinsAndSecs(ms){
    const mins = Math.floor(ms / 60000)
    const secs = (ms % 60000 / 1000).toFixed(0)/1
    return {
        mins : mins,
        secs : secs
    }
}

export default class CountDownContainer extends Component {

    getSecsElapsed(){
       return this.props.timeElapsed / 1000
    }


    render(){
        const timeleft = inMinsAndSecs(FOCUS_TIME - this.props.timeElapsed)
        return <CountDown
                  timers={timeleft}
        />
    }
}