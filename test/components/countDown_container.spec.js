import React from 'react'
import chai, {expect} from 'chai'
import { shallow } from 'enzyme'
import mocha, {done } from 'mocha'
import { toSecs, toMins } from '../../src/components/countDown_container.js'



describe('toSecs', ()=>{
    it('turns ms to seconds', ()=>{
        expect(toSecs(1000)).to.equal(1)
    })
})

describe('toMins', ()=>{
    it('turns ms to minutes', ()=>{
        expect(toMins(300000)).to.equal(5)
    })
})

