//src contstants
// export const FOCUS_TIME = 1500000; // 25 mins
export const FOCUS_TIME = 10000

//Testing constants
export const TIME_TOLERANCE = 2;

var timer;
var state = {};
//timer functions
export function startTimer(tick) {
  state.startTime = Date.now();
  state.isTimerRunning = true;
  timer = setInterval(() => {
    tick();
  }, 1000);
}

export function tick() {
  console.log("tick state ", state);
  if (state.startTime) {
    state.timeElapsed = Date.now() - state.startTime;
  }
}

export function stopTimer() {
  console.log("in stop timers");
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
