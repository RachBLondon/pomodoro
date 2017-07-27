import React, { Component } from 'react'
import CountDown from './countDown.js'

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