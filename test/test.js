require('chai').should();

const maximalSquare = require('../index.js');

describe('Maximal Square', function () {

  it('should return 4 when the input is ["10100", "10111", "11111", "10010"]', function () {
    maximalSquare(["10100", "10111", "11111", "10010"]).should.eql(4);
  });

  it('should return 9 when the input is ["0111", "1111", "1111", "1111"]', function () {
    maximalSquare(["0111", "1111", "1111", "1111"] ).should.eql(9);
  });

  it('should return 1 when the input is ["0111", "1101", "0111"]', function () {
    maximalSquare( ["0111", "1101", "0111"]).should.eql(1);
  });

  it('should return 4 when the input is ["1111", "1111"]', function () {
    maximalSquare(["1111", "1111"] ).should.eql(4);
  });

  it('should return 16 when the input is  ["101101", "111111", "011111", "111111", "001111", "011111"] ', function () {
    maximalSquare( ["101101", "111111", "011111", "111111", "001111", "011111"] ).should.eql(16);
  });

  it('should return 9 when the input is ["101101", "111111", "010111", "111111"] ', function () {
    maximalSquare(["101101", "111111", "010111", "111111"] ).should.eql(9);
  });

});