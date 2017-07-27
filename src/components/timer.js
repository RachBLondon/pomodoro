import React, { Component } from 'react'

const interval = 1000
const limit = 15
//TODO remove counter and only use state
let counter = 0
let recoder

//issue with chrome 
// fix with Date.now (maybe do to string)
// https://bugs.chromium.org/p/chromium/issues/detail?id=161319



export default class Timer extends Component{
    
    constructor(props){
        super(props);
            this.state = {startTime: Date.now(), test: "hello"}
    }

    startTimer(){
        console.log('in start Timer this ', this)
        this.timer = setInterval(()=>{
           this.tick()
        }, 1000)
    }

    stopTimer(){
        console.log("stop timer  this", this)
        clearInterval(this.time)
    }

    tick(){
        console.log("tick", this.state, "this", this)
        if(this.state.startTime){
            this.setState({timeElapsed : Date.now() - this.state.startTime })

        }
    }

  

   // TODO save all state in chrome storage on component will unmount
    // componentWillUnmount(){
    //     console.log("in componne will unmount " )
    //     chrome.storage.sync.set({'startTime': this.state.startTime}, function(){
    //         message('saved settings')
    //     })
    // }

    // startTimer(){
    //     const startTime = Date.now()
    //     this.setState({startTime :startTime })
    // }


   

    // saveInChrome(){
    //     console.log("in save in chrome ", this.state.startTime)
    //     chrome.storage.sync.set({startTime: this.state.startTime}, function(){
    //     })
    // }


    // getTimeElapsed(){
    //     if(this.state.startTime){
    //         setInterval(function(){
    //             this.setState({timeElapsed: Date.now() - this.state.startTime })
    //         },1000)
    //     }
    // }

    

    // getChromeTime(){
    //       chrome.storage.sync.get("startTime", (startTime)=>{
    //         console.log("chrome get ", startTime)
    //     })
    // }

    

    render(){
        console.log("render this. state", this.state, "this ", this)
        return <div style={{height : '100px'}}>
                    <span className="startTime">State Start Time{this.state.startTime}</span>
                    <span className="elapsedTime">Elapsed Time {this.state.timeElapsed}</span>
                    <button onClick={this.startTimer.bind(this)}> button</button>
                    <button onClick={this.stopTimer}>Stop </button>
                    
                    

                </div>
    }
}
                    // <button onClick={this.saveInChrome.bind(this)}> Save in chrome storage</button>
                    // <button onClick={this.getChromeTime}> Save in chrome storage</button>

