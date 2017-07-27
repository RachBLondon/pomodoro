

import React from 'react'
import chai, {expect} from 'chai'
import Timer, { getTimeElapsed } from '../../src/components/timer'
import { shallow } from 'enzyme'
import mocha, {done } from 'mocha'
//TODO get this working properly
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
})

describe.only('Time functions', ()=>{
    before(function () {
        global.chrome = chrome
    })
    
    const wrapper = shallow(<Timer />)                      
    const date = Date.now()
    wrapper.instance().startTimer()

    it('startTime save a time in state', ()=>{
        console.log("1",wrapper.state('startTime'))
        expect(wrapper.state('startTime')).to.equal(date)
    })
    
    it('calculates the time elapsed since start time', ()=>{
        const perfectValue = Date.now()- date
        expect(perfectValue - wrapper.state('timeElapsed')<= 2).to.be.true
    })
})


