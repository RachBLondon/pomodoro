//src contstants
export const FOCUS_TIME = 1500000; // 25 mins

//Testing constants
export const TIME_TOLERANCE = 2;


var timer
var state = {}
//timer functions
export function startTimer(tick) {
  state.startTime = Date.now();
  state.isTimerRunning = true;
  timer = setInterval(() => {
    tick();
  }, 1000);
  console.log("start timer utils ", state);
}

export function tick() {
  console.log("tick state ");
  if (state.startTime) {
    state.timeElapsed = Date.now() - state.startTime;
  }
}

export function stopTimer() {
  console.log("in stop timers")  
  state = {};
  
  clearInterval(timer);
}
