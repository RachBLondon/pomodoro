import React, { Component } from 'react'

const interval = 1000
const limit = 15
//TODO remove counter and only use state
let counter = 0
let recoder

export default class Timer extends Component{
    constructor(props) {
        super(props)
        this.state = {isRunning: false}
    }

    componentWillMount(){
        chrome.storage.sync.get('isRunning', (isRunning)=>{
            this.setState(isRunning)
        })

        chrome.storage.sync.get('startTime', (startTime)=>{
            this.setState(startTime)
        })
    }

    timer(){
        if(this.state.startTime < limit && this.state.isRunning) {
            counter = this.state.startTime
            counter++
            this.setState({ isRunning : true, startTime : counter })
            chrome.storage.sync.set({isRunning: true, startTime :counter})
        } 
    }

    startTimer(){
        recoder = setInterval(this.timer.bind(this), interval);
    }

    pauseTimer(){
        clearInterval(recoder);
        this.setState({ isRunning : false })
        chrome.storage.sync.set({ isRunning: false })
    }

    handleClick(){
        if(this.state.isRunning){
            counter = 0
            this.pauseTimer()
        } else {
            this.setState({ isRunning : true, startTime :0 })
            chrome.storage.sync.set({ isRunning: true, startTime : 0 })
            this.startTimer()
        }
    }

    handlePause(){
        if(this.state.isRunning){
            this.pauseTimer()
        } else if (this.state.startTime > 0){
            clearInterval(recoder)
            this.setState({ isRunning : true})
            chrome.storage.sync.set({ isRunning: true})
            this.startTimer()
        }
    }
    render(){
        const pauseVisbility = !this.state.isRunning ? 'grey': 'black'
        const buttonText = this.state.isRunning ? 'Stop' : (!this.state.isRunning && (this.state.startTime > 0)) ? 'Restart' : 'Start'
        return <div style={{height: '250px', width:'250px', display:"flex", justifyContent: "center", alignItems: "center"}}>
                    <p> Time : {this.state.startTime}</p>
                    <div onClick={this.handleClick.bind(this)} style={{backgroundColor:"black", height:"50px", width:"100px"}}>
                        <h1 style={{color: 'white'}}>{buttonText}</h1>
                    </div>
                     <div onClick={this.handlePause.bind(this)} style={{backgroundColor:pauseVisbility, height:"30px", width:"50px"}}>
                        <p style={{color: 'white'}}>Pause</p>
                    </div>
                </div>
    }
}

