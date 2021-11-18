const sortedSquares = require('./sortedSquares');

describe('Sorted squares', () => {
  it('Result should be:', () => {
    const nums = [-4,-1,0,3,10];
    const output = [0,1,9,16,100].toString();
    const result = sortedSquares(nums).toString();
    expect(result).toMatch(output);
  });
  it('Result should be:', () => {
    const nums = [-7,-3,2,3,11];
    const output = [4,9,9,49,121].toString();
    const result = sortedSquares(nums).toString();
    expect(result).toMatch(output);
  });
})