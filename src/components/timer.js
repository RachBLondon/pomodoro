import React, { Component } from 'react'

const interval = 1000
const limit = 15
//TODO remove counter and only use state
let counter = 0
let recoder

export function add(a, b){
    return a + b
}

export default class Timer extends Component{
    constructor(props) {
        super(props)
        this.state = {startTime: false}
    }

    componentWillMount(){
   
        // chrome.storage.sync.get('startTime', (startTime)=>{
        //     this.setState(startTime)
        // })
    }
    //TODO save all state in chrome storage on component will unmount

    handleClick(){
        console.log("in handle click", this)
        const startTime = new Date()
        this.setState({startTime : startTime.getTime()}, function(){
            console.log("jsadhf", this.state.startTime)

        })
    }


    getTimeElapsed(){
        console.log('in getTimeElapsed', this)
        if(this.state.startTime){
            console.log("in this.state.startTime")
            const date = new Date()
            const currentTime = date.getTime()
            console.log('currentTime ', currentTime, 'startTime :', this.state.startTime)
            return currentTime - this.state.startTime
        }
      
    }

    render(){
        return <div style={{height: '250px', width:'250px', display:"flex", justifyContent: "center", alignItems: "center"}}>
                    <p> Time : {this.getTimeElapsed.call(this)}</p>
                    <div onClick={this.handleClick.bind(this)} style={{backgroundColor:"black", height:"50px", width:"100px"}}>
                        <h1 style={{color: 'white'}}>{"start"}</h1>
                    </div>
                </div>
    }
}

