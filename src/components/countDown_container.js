import React, { Component } from 'react'
import CountDown from './countDown.js'

export default class CountDownContainer extends Component {
    render(){
        return <CountDown
                    secsToGo={67}
                    minsToGo={15}
        />
    }
}