var state = {}
var timer


function startTimer(){
  state.startTime = Date.now()
  state.isTimerRUnning = true
  timer = setInterval(()=>{
     tick()
  }, 1000)
    console.log("state :", state)
}

function tick(){
    console.log("tick state ", state)
    if(state.startTime){
        state.timeElapsed = Date.now() - state.startTime 
    }
}

function stopTimer(){
  state = {}
  clearInterval(timer)
}

function handleMessage(request, sender, sendResponse) {

    if(request === 'startTimer'){
      startTimer()
    }

    if(request === 'stopTimer'){
      stopTimer()
    }

    if(request === 'getTime'){
      sendResponse({timeElapsed : state.timeElapsed})
    }
}

chrome.runtime.onMessage.addListener(handleMessage);
//https://stackoverflow.com/questions/2315863/does-onbeforeunload-event-trigger-for-popup-html-in-a-google-chrome-extension