import { startTimer, tick, stopTimer, getTime } from "./utils"


// chrome.app.runtime.onLaunched.addListener(function() {
//   // chrome.app.window.create('calculator.html', {
//   //   id: "calcWinID",
//   //   innerBounds: {
//   //     width: 244,
//   //     height: 380,
//   //     minWidth: 244,
//   //     minHeight: 380
//   //   }
//   // });
//   console.log("hello")
// });

const options = {
  type : "basic",
  title : "hello notification",
  message : "sadkjfhdskalfhklsdaf ",
  iconUrl : "./assets/icon48.png"
}

function handleMessage(request, sender, sendResponse) {

  if (request === 'startTimer') {
    console.log("chrome :", chrome)
    chrome.notifications.create(options, callback )
    startTimer( tick)
    sendResponse('done')
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

function callback (){
  console.log("cb done")
}

chrome.runtime.onMessage.addListener(handleMessage);
//https://stackoverflow.com/questions/2315863/does-onbeforeunload-event-trigger-for-popup-html-in-a-google-chrome-extension