import chai, {expect} from 'chai'
import { add } from '../../src/components/timer'



describe('add', ()=>{
    it('add',()=>{
        expect(1 + 5).to.equal(6)
        expect(add(1, 2)).to.equal(3)

    })
})