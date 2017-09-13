var state = {}
var timer
import { startTimer } from "./utils"

// var timerObj = {
//   startTimer: function () {
//     this.startTime = Date.now()
//     this.isTimerRUnning = true
//     this.timer = setInterval(() => {
//       const boundTick = timerObj.tick.bind(timerObj)
//       boundTick()
//     }, 1000)
//   },
//   tick: function () {
//     console.log("tick :", this)
//     if (this.startTime) {
//       this.timeElapsed = Date.now() - this.startTime
//     }
//   },
//   stopTimer: function () {
//     clearInterval(this.timer)
//     this.startTime = null
//     this.isTimerRUnning = false
//     this.oldTimeElapsed = this.timeElapsed
//     this.timeElapsed = 0
//     console.log("stop timer", this)
//   }
// }

// function startTimer() {
//   state.startTime = Date.now()
//   state.isTimerRUnning = true
//   timer = setInterval(() => {
//     tick()
//   }, 1000)
//   console.log("state :", state)
// }

function tick() {
  console.log("tick state ", state)
  if (state.startTime) {
    state.timeElapsed = Date.now() - state.startTime
  }
}

function stopTimer() {
  state = {}
  clearInterval(timer)
}

function handleMessage(request, sender, sendResponse) {

  if (request === 'startTimer') {
    console.log("in start timer")
    startTimer(state, timer, tick)
  }

  if (request === 'stopTimer') {
    stopTimer()
  }

  if (request === 'getTime') {
    sendResponse(state)
  }
}

chrome.runtime.onMessage.addListener(handleMessage);
//https://stackoverflow.com/questions/2315863/does-onbeforeunload-event-trigger-for-popup-html-in-a-google-chrome-extension