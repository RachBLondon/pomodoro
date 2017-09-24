import { startTimer, tick, stopTimer, getTime } from "./utils"


function handleMessage(request, sender, sendResponse) {

  if (request === 'startTimer') {
    console.log("in start timer")
    startTimer( tick)
  }

  if (request === 'stopTimer') {
    stopTimer()
    sendResponse('done')
  }

  if (request === 'getTime') {
    console.log(getTime())
    sendResponse(getTime())
  }
}

chrome.runtime.onMessage.addListener(handleMessage);
//https://stackoverflow.com/questions/2315863/does-onbeforeunload-event-trigger-for-popup-html-in-a-google-chrome-extension