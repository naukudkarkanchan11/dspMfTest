var chai = require('chai');  
var assert = chai.assert;   
var expect = chai.expect;   
var should = chai.should();


describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
      [1, 2, 3].indexOf(5).should.equal(-1);
    });
  });
});