//src contstants
// export const FOCUS_TIME = 1500000; // 25 mins
export const FOCUS_TIME = 3000

//Testing constants
export const TIME_TOLERANCE = 2;

var timer;
var state = {};
//timer functions
export function startTimer(tick, timesUp) {
  state.startTime = Date.now();
  state.isTimerRunning = true;
  // console.log(" in starttImer timesUp", timesUp)
  
  timer = setInterval(() => {
    console.log(" in setIntervail timesUp", timesUp)
    tick(timesUp);
  }, 1000);
}

export function tick(timesUp) {
  console.log("in tick ", timesUp)
  if (state.startTime) {
    state.timeElapsed = Date.now() - state.startTime;
    if(state.timeElapsed > FOCUS_TIME){
      console.log("will fire times up", timesUp)
      timesUp()
    }

  }
}

export function stopTimer() {
  state = {};
  clearInterval(timer);
}

export function getTime() {
  return state;
}

export function inMinsAndSecs(ms) {
  const mins = Math.floor(ms / 60000);
  const secs = ((ms % 60000) / 1000).toFixed(0) / 1;
  return {
    mins: mins,
    secs: secs
  };
}
