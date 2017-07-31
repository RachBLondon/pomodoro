import React from 'react'
import chai, {expect} from 'chai'
import { shallow, mount } from 'enzyme'
import mocha, {done } from 'mocha'
import { toSecs, toMins, inMinsAndSecs } from '../../src/components/countDown_container.js'
import { FOCUS_TIME } from '../../utils'
import CountDownContainer from '../../src/components/countDown_container'



describe('inMinsAndSecs', ()=>{
    it('coverts 1sec correctly', ()=>{
        expect(inMinsAndSecs(1000)).to.deep.equal({mins: 0, secs:1})
    })

    it('converts 1 min correctly', ()=>{
        expect(inMinsAndSecs(60000)).to.deep.equal({mins: 1, secs: 0})
    })

    it('converts 4 mins 25 seconds correctly', ()=>{
        expect(inMinsAndSecs(265000)).to.deep.equal({mins: 4, secs:25})
    })

    it('converts 25mins accurately', ()=>{
        expect(inMinsAndSecs(1500000)).to.deep.equal({mins:25, secs: 0})
    })
})

describe('timeleft', ()=>{
    it('converts 1 min work completed accurately', ()=>{
        const oneMinWorkCompleted = FOCUS_TIME - 60000
        expect(inMinsAndSecs(oneMinWorkCompleted)).to.deep.equal({mins:24, secs: 0})
    })

    it('converts 10 mins 3 seconds work accurately',()=>{
        const tenMins3secsWorkCompleted = FOCUS_TIME - 603000
        expect(inMinsAndSecs(tenMins3secsWorkCompleted)).to.deep.equal({mins:14, secs: 57})
    })
})

describe('<CountDownContainer />', function(){
    const wrapper = shallow(<CountDownContainer timeElapsed={1000}/>)
    it('renders countdown', ()=>{
        expect(wrapper.find('CountDown')).to.have.length(1)
    })
    it('renders correct timers with prop of 1000ms', ()=>{
        expect(wrapper.props().timers).to.be.deep.equal({ mins: 24, secs: 59 })
    })
})



