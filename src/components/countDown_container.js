import React, { Component } from 'react'
import CountDown from './countDown.js'

export function toSecs(ms){
    return ms / 1000
}

export function toMins(ms){
    return (ms / 1000) / 60
}

export default class CountDownContainer extends Component {

    getSecsElapsed(){
       return this.props.timeElapsed / 1000
    }

    // getMinsElapsed(){

    // }

    render(){
        console.log("countdown ", this.props.timeElapsed)
        return <CountDown
                    secsToGo={this.getSecsElapsed()}
                    minsToGo={15}
        />
    }
}