

import React from 'react'
import chai, {expect} from 'chai'
import Timer, { getTimeElapsed } from '../../src/components/timer'
import { shallow } from 'enzyme'
import mocha, {done } from 'mocha'
import chrome from 'sinon-chrome' //https://github.com/acvetkov/sinon-chrome
import sinon from 'sinon'
//TODO get sinon to simulate button clicks

describe('Timer', ()=>{
    before(function () {
        global.chrome = chrome
    })

    it('exisists', ()=>{
        expect(Timer).to.exist
    })

    // describe('loading state & storage', ()=>{
    //     before(function () {
    //         global.chrome = chrome
    //     })
    //     it('should have inital state of startTime = null', ()=>{
    //         const wrapper = shallow(<Timer />)
    //         expect(wrapper.state('startTime')).to.equal(null)
    //     })

    //     it('should not store a start time on inital load in chrome storage', ()=>{
    //        expect(chrome.storage.startTime === null || chrome.storage.startTime === undefined ) 
    //     })
    // })
})

describe.only('Time functions', ()=>{
    before(function () {
        global.chrome = chrome
    })
    
    const wrapper = shallow(<Timer />)                      
    const date = Date.now()
    wrapper.instance().startTimer()

    it('startTime save a time in state', ()=>{
        expect(wrapper.state('startTime')).to.equal(date)
    })
    
    it('calculates the time elapsed since start time', ()=>{
        expect(wrapper.state('timeSinceStartTime')).to.equal(Date.now()- date)
    })


})







// describe('timeElapsed', ()=>{
//     it('should work out time difference to a 10ms accuracey', (done)=>{
//         const startTime = new Date()
//         setTimeout(function(){
//             const timeElapsed = getTimeElapsed(startTime)
//             expect((timeElapsed - 1000) < 10).to.be.true
//             done()
//         }, 1000)
//     })
// })

