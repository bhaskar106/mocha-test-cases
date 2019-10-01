var assert = require('assert');
var add = require('./Add.js');
var subtract = require('./Subtract.js');
var multiply = require('./Multiply.js');
var divide = require('./Divide.js');

describe('add', function() {
  it('Will add the values', function() {
    assert.equal(add(1,2),3);
  });
  it('Will add the values', function() {
    assert.equal(add(-1,-2),3);
  });
  it('Will add the values', function() {
    assert.equal(add(-1,-2),-3);
  });
  it('Will add the values', function() {
    assert.equal(add(19,34),53);
  });
});

describe('subtract', function() {
  it('will subtract the values', function() {
    assert.equal(subtract(30,20),10);
  });
  it('will subtract the values', function() {
    assert.equal(subtract(-80,28),-108);
  });
  it('will subtract the values', function() {
    assert.equal(subtract(345,23),320);
  });
  it('will subtract the values', function() {
    assert.equal(subtract(-100,-40),60);
  });
});


describe('multiply', function() {
  it('will multiply the values', function() {
    assert.equal(multiply(3,2),6);
  });
  it('will multiply the values', function() {
    assert.equal(multiply(4,5),20);
  });
  it('will multiply the values', function() {
    assert.equal(multiply(20,3),80);
  });
  it('will multiply the values', function() {
    assert.equal(multiply(56,1),56);
  });
});

describe('dividing', function() {
  it('will divide the values', function() {
    assert.equal(divide(30,6),5);
  });
  it('will divide the valuess', function() {
    assert.equal(divide(80,5),16);
  });
  it('will divide the values', function() {
    assert.equal(divide(2222,2),1111);
  });
  it('will divide the valuess', function() {
    assert.equal(divide(77,66),55);
  });
});
    