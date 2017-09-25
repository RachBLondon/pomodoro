import { startTimer, tick, stopTimer, getTime } from "./utils";

const options = {
  type: "basic",
  title: "hello notification",
  message: "sadkjfhdskalfhklsdaf ",
  iconUrl: "./assets/icon48.png"
};

function timesUp() {
  chrome.notifications.create(options, function() {
  });
}

function handleMessage(request, sender, sendResponse) {
  if (request === "startTimer") {
    startTimer(tick, timesUp);
    sendResponse("done");
  }

  if (request === "stopTimer") {
    stopTimer();
    sendResponse("done");
  }

  if (request === "getTime") {
    console.log(getTime());
    sendResponse(getTime());
  }
}

chrome.runtime.onMessage.addListener(handleMessage);
//https://stackoverflow.com/questions/2315863/does-onbeforeunload-event-trigger-for-popup-html-in-a-google-chrome-extension
