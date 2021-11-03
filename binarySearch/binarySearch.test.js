const search = require('./binarySearch');

describe('Search binary', () => {
  it(`The target's index should be 4`, () => {
    expect(search([-1,0,3,5,9,12], 9)).toBe(4);
  });
  it(`The target's index should be -1`, () => {
    expect(search([-1,0,3,5,9,12], 2)).toBe(-1);
  });
  it(`The target's index should be 0`, () => {
    expect(search([5], 5)).toBe(0);
  });
});