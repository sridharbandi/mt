import chai from 'chai';
const {expect, assert} = chai;

describe('Array tests', () => {

    let names = ["Jackson", "Rob", "Jack", "Wilson", "John"]

    it('Assert length of an Array', ()=> {
        expect(names.length).to.equal(5)
    })

    it('Assert name contains Daniel', ()=> {
        assert.isTrue(names.includes('Daniel'))
    })

    it('Assert length of an filtered names', ()=> {
        let filteredNames = names.filter(n => n.startsWith('Jack'))
        expect(filteredNames.length).to.equal(2)
    })

})