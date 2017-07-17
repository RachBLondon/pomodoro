import React from 'react'
import chai, {expect} from 'chai'
import Timer from '../../src/components/timer'
import { shallow } from 'enzyme'

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