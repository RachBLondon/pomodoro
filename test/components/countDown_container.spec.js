import React from 'react'
import chai, {expect} from 'chai'
import CountDown from '../../src/components/timer'
import { shallow } from 'enzyme'
import mocha, {done } from 'mocha'


describe('CountDown', ()=>{


    it('exists', ()=>{
        expect(CountDown).to.exist
    })
})