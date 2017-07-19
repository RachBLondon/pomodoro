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
        this.state = {test :"hwlloe"}
    }

    componentWillMount(){

        // chrome.storage.sync.get('startTime', (startTime)=>{
        //     this.setState(startTime)
        // })
    }
    //TODO save all state in chrome storage on component will unmount
    startTimer(){
        const startTime = new Date()
        this.setState({startTime : startTime})
        return startTime
    }

    render(){
        return <div>
                    Hello
                </div>
    }
}

