const assert = require('assert');
const sumOfOther = require('../sumOfOther/sumOfOther.js');

describe('Test: sumOfOther()', () => {
  it('1', () => {
    const elem = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(elem, [8, 7, 6, 9]);
  });

  it('2', () => {
    const elem = sumOfOther([14, 84, 1, 23]);
    assert.deepEqual(elem, [108, 38, 121, 99]);
  });

  it('3', () => {
    const elem = sumOfOther([7, 64, 83, 15, 35, 20, 101]);
    assert.deepEqual(elem, [318, 261, 242, 310, 290, 305, 224]);
  });
});