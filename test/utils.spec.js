import {inMinsAndSecs} from '../utils'
import chai, {expect} from 'chai'
import mocha, {done } from 'mocha'



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