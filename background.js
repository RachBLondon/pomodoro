console.log("hello from background file")

function handleMessage(request, sender, sendResponse) {
  console.log("Message from the content script: " +
    request);
  sendResponse({response: "Response from background script"});
}

chrome.runtime.onMessage.addListener(handleMessage);
//https://stackoverflow.com/questions/2315863/does-onbeforeunload-event-trigger-for-popup-html-in-a-google-chrome-extension