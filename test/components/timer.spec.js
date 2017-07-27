

import React from 'react'
import chai, {expect} from 'chai'
import Timer from '../../src/components/timer'
import { shallow } from 'enzyme'
import mocha, {done } from 'mocha'
//TODO get this working properly
import chrome from 'sinon-chrome' //https://github.com/acvetkov/sinon-chrome
import sinon from 'sinon'
//TODO get sinon to simulate button clicks

import { TIME_TOLERANCE } from './../utils.js'

describe('Timer', ()=>{
    before(function () {
        global.chrome = chrome
    })

    it('exisists', ()=>{
        expect(Timer).to.exist
    })
})

describe('Time functions', ()=>{
    before(function () {
        global.chrome = chrome
    })
    
    const wrapper = shallow(<Timer />)                      
    const date = Date.now()
    wrapper.instance().startTimer()

    it(`startTime save a time in state with a tolerance of ${TIME_TOLERANCE}`, ()=>{
        expect(wrapper.state('startTime')- date <= TIME_TOLERANCE).to.be.true
    })
    
    it(`calculates the time elapsed since start time ${TIME_TOLERANCE}`, ()=>{
        const perfectValue = Date.now()- date
        expect(perfectValue - wrapper.state('timeElapsed')<= TIME_TOLERANCE).to.be.true
    })

    it('stop timer stops elapsed time from increasing', (done)=>{
        const initalTime = wrapper.state('timeElapsed')
        wrapper.instance().stopTimer()
        setTimeout(function(){
            expect(wrapper.state('timeElapsed')).to.equal(initalTime)
            done()
        },200)
    })
})

describe('start and stop buttons', ()=>{
    const wrapper = shallow(<Timer />)
    wrapper.instance().startTimer()

    it('should hide statButton when the timer is running', ()=>{
        expect(wrapper.find(".startBtn")).to.have.length(0)
    })

    it('should hide stopButton whne timer is not running ', ()=>{
        wrapper.instance().stopTimer()
        expect(wrapper.find(".stopBtn")).to.have.length(0)
    })
})

