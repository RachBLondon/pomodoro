import React, { Component } from 'react'

const interval = 1000
const limit = 15
//TODO remove counter and only use state
let counter = 0
let recoder

export default class Timer extends Component{
    constructor(props) {
        super(props)
        // this.state = {isRunning: false}
    }

ç    componentWillMount(){
   
        // chrome.storage.sync.get('startTime', (startTime)=>{
        //     this.setState(startTime)
        // })
    }
    //TODO save all state in chrome storage on component will unmount

    handleClick(){
        console.log("in handle click")
        const startTime = new Date()
        this.setState({startTime : startTime}, function(){
            console.log("jsadhf", this.state.startTime.getHours())

        })
    }




    render(){
        // const pauseVisbility = !this.state.isRunning ? 'grey': 'black'
        // const buttonText = this.state.isRunning ? 'Stop' : (!this.state.isRunning && (this.state.startTime > 0)) ? 'Restart' : 'Start'
        return <div style={{height: '250px', width:'250px', display:"flex", justifyContent: "center", alignItems: "center"}}>
                    <p> Time : {this.state.startTime</p>
                    <div onClick={this.handleClick.bind(this)} style={{backgroundColor:"black", height:"50px", width:"100px"}}>
                        <h1 style={{color: 'white'}}>{"start"}</h1>
                    </div>
                </div>
    }
}

