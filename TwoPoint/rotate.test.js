const rotate = require('./rotate');

describe('rotate', () => {
  it('Result should be:', () => {
    const nums = [-4,-1,0,3,10];
    const expectedArray = [ 3, 10, -4, -1, 0 ];
    const resultArray = rotate(nums, 2);
    // expect(resultArray).toEqual(expect.arrayContaining(expectedArray));
    // expect(resultArray.length).toEqual(expectedArray.length);
    expect(new Set(resultArray)).toEqual(new Set(expectedArray));
    expect(resultArray.length).toBe(expectedArray.length);
  });
})