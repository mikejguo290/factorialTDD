var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('outputs 120 when given 5', ()=>{
      //Setup
      const expectedResult=120;
      //Exercise
      const result=Calculate.factorial(5);
      //Verify
      assert.strictEqual(result, expectedResult)
    })
    it('outputs 6 when given 3', ()=>{
      //Setup
      const expectedResult=6;
      //Exercise
      const result=Calculate.factorial(3);
      //Verify
      assert.strictEqual(result, expectedResult);
    })
  });
});