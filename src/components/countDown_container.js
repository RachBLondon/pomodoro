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
    // componentWillMount(){
    //     console.log("in component will mount", this.props)
    //     this.setState({'timers': inMinsAndSecs(FOCUS_TIME - this.props.timeElapsed) }, function(){
    //         console.log("state ", this.state)
    //     })
    //     chrome.storage.sync.get('tesr', function(storage){
    //         console.log("got storage", storage)
    //     })
    // }

    componentWillReceiveProps(){
        console.log("in component will recieve props", this.props)
        this.setState({'timers': inMinsAndSecs(FOCUS_TIME - this.props.timeElapsed) }, function(){
            console.log("state ", this.state)
        })
        chrome.storage.sync.get('tesr', function(storage){
            console.log("got storage", storage)
        })
    }

    //TODO this is not getting trigger
    componentWillUnmount(){
        console.log("in component will UN UN mount")
        chrome.storage.sync.set({tesr : "hello3"}, function(storage){
            console.log("got storage", storage)
        })
    }

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