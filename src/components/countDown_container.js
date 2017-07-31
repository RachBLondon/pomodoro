import React, { Component } from 'react'
import CountDown from './countDown.js'

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
        console.log("countdown ", this.props.timeElapsed)
        return <CountDown
                    secsToGo={this.getSecsElapsed()}
                    minsToGo={15}
        />
    }
}