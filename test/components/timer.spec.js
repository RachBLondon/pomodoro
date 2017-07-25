import React from 'react'
import chai, {expect} from 'chai'
import Timer, { getTimeElapsed } from '../../src/components/timer'
import { shallow } from 'enzyme'
import mocha, {done } from 'mocha'
import chrome from 'sinon-chrome'

describe('Timer', ()=>{
    before(function () {
        global.chrome = chrome
    })

    it('exisists', ()=>{
        expect(Timer).to.exist
    })

    describe('loading state & storage', ()=>{
        before(function () {
            global.chrome = chrome
        })
        it('should have inital state of startTime = null', ()=>{
            const wrapper = shallow(<Timer />)
            expect(wrapper.state('startTime')).to.equal(null)
        })

        it('should not store a start time on inital load in chrome storage', ()=>{
           expect(chrome.storage.startTime === null || chrome.storage.startTime === undefined ) 
        })
    })
})

// describe('startTime', ()=>{
//     before(function () {
//         global.chrome = chrome
//     })

//     it('returns and saves a start time in state', ()=>{
//         const wrapper = shallow(<Timer />)
//         var date = new Date()
//         expect(wrapper.instance().startTimer().getMinutes()).to.equal(date.getMinutes())
//         expect(wrapper.state('startTime').getMinutes()).to.equal(date.getMinutes())
//     })
// })




describe('timeElapsed', ()=>{
    it('should work out time difference to a 10ms accuracey', (done)=>{
        const startTime = new Date()
        setTimeout(function(){
            const timeElapsed = getTimeElapsed(startTime)
            expect((timeElapsed - 1000) < 10).to.be.true
            done()
        }, 1000)
    })
})

