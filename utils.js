//src contstants
export const FOCUS_TIME = 1500000; // 25 mins

//Testing constants
export const TIME_TOLERANCE = 2;

//timer functions
export function startTimer(state, timer, tick) {
    state.startTime = Date.now()
    state.isTimerRunning = true
    timer = setInterval(()=>{
        tick()
    }, 1000)
    console.log("start timer utils ", state)
}
