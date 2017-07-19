import React from 'react'
import chai, {expect} from 'chai'
import Timer, { getTimeElapsed } from '../../src/components/timer'
import { shallow } from 'enzyme'
import mocha, {done } from 'mocha'

describe('Timer', ()=>{
    it('exisists', ()=>{
        expect(Timer).to.exist
    })
})

describe('startTime', ()=>{
    it('returns and saves a start time in state', ()=>{
        const wrapper = shallow(<Timer />)
        var date = new Date()
        expect(wrapper.instance().startTimer().getMinutes()).to.equal(date.getMinutes())
        expect(wrapper.state('startTime').getMinutes()).to.equal(date.getMinutes())
    })
})



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

