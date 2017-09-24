// import React from 'react'
// import chai, {expect} from 'chai'
// import Timer, { inMinsAndSecs } from '../../src/components/timer'
// import { shallow } from 'enzyme'
// import mocha, {done } from 'mocha'
// //TODO get this working properly
// import chrome from 'sinon-chrome' //https://github.com/acvetkov/sinon-chrome
// import sinon from 'sinon'
// //TODO get sinon to simulate button clicks

// import { TIME_TOLERANCE, FOCUS_TIME } from './../../utils.js'


// describe('inMinsAndSecs', ()=>{
//     it('coverts 1sec correctly', ()=>{
//         expect(inMinsAndSecs(1000)).to.deep.equal({mins: 0, secs:1})
//     })

//     it('converts 1 min correctly', ()=>{
//         expect(inMinsAndSecs(60000)).to.deep.equal({mins: 1, secs: 0})
//     })

//     it('converts 4 mins 25 seconds correctly', ()=>{
//         expect(inMinsAndSecs(265000)).to.deep.equal({mins: 4, secs:25})
//     })

//     it('converts 25mins accurately', ()=>{
//         expect(inMinsAndSecs(1500000)).to.deep.equal({mins:25, secs: 0})
//     })
// })

// describe('timeleft', ()=>{
//     it('converts 1 min work completed accurately', ()=>{
//         const oneMinWorkCompleted = FOCUS_TIME - 60000
//         expect(inMinsAndSecs(oneMinWorkCompleted)).to.deep.equal({mins:24, secs: 0})
//     })

//     it('converts 10 mins 3 seconds work accurately',()=>{
//         const tenMins3secsWorkCompleted = FOCUS_TIME - 603000
//         expect(inMinsAndSecs(tenMins3secsWorkCompleted)).to.deep.equal({mins:14, secs: 57})
//     })
// })

// describe('Timer', ()=>{
//     before(function () {
//         global.chrome = chrome
//     })

//     it('exisists', ()=>{
//         expect(Timer).to.exist
//     })
// })

// describe('Time functions', ()=>{
//     before(function () {
//         global.chrome = chrome
//     })
    
//     const wrapper = shallow(<Timer />)                      
//     const date = Date.now()
//     wrapper.instance().startTimer()

//     it(`startTime save a time in state with a tolerance of ${TIME_TOLERANCE}`, ()=>{
//         expect(wrapper.state('startTime')- date <= TIME_TOLERANCE).to.be.true
//     })
    
//     it(`calculates the time elapsed since start time with a tolerance ${TIME_TOLERANCE}`, ()=>{
//         const perfectValue = Date.now()- date
//         expect(perfectValue - wrapper.state('timeElapsed')<= TIME_TOLERANCE).to.be.true
//     })

//     it('stop timer stops elapsed time from increasing', (done)=>{
//         const initalTime = wrapper.state('timeElapsed')
//         wrapper.instance().stopTimer()
//         setTimeout(function(){
//             expect(wrapper.state('timeElapsed')).to.equal(initalTime)
//             done()
//         },200)
//     })
// })

// describe('start and stop buttons', ()=>{
//     const wrapper = shallow(<Timer />)
//     wrapper.instance().startTimer()

//     it('should hide statButton when the timer is running', ()=>{
//         expect(wrapper.find(".startBtn")).to.have.length(0)
//     })

//     it('should hide stopButton whne timer is not running ', ()=>{
//         wrapper.instance().stopTimer()
//         expect(wrapper.find(".stopBtn")).to.have.length(0)
//     })
// })

