// this file should not be in worked on in dist.
//look at moving it using webpack ? or gulp.
console.log("hello from background file")

// chrome.extension.onMessage.addListener((request,sender,sendResponse)=>{
//     if( request.greeting === "startTimer" ){
//         console.log('starting timer')
//     }
// })

// // https://developer.chrome.com/extensions/messaging
//   var port = chrome.runtime.connect();
//   port.onDisconnect.addListener(function() {
//     console.log("Disconnected");
//   });



function handleMessage(request, sender, sendResponse) {
  console.log("Message from the content script: " +
    request);
  sendResponse({response: "Response from background script"});
}

chrome.runtime.onMessage.addListener(handleMessage);

// var
//https://stackoverflow.com/questions/2315863/does-onbeforeunload-event-trigger-for-popup-html-in-a-google-chrome-extension