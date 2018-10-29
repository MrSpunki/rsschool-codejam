const assert = require('assert');
const make = require('../make/make.js');

const sum = (a, b) => a + b;

describe('Test: make()', () => {
  it('1', () => {
    const elem = make(15)(34, 21, 666)(41)(sum);
    assert.deepEqual(elem, 777);
  });

  it('2', () => {
    const elem = make(4)(49, 1, 999)(14)(sum);
    assert.deepEqual(elem, 1067);
  });

  it('3', () => {
    const elem = make(600)()(60)(6)(sum);
    assert.deepEqual(elem, 666);
  });
})
