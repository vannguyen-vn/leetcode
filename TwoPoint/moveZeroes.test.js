const moveZeroes = require('./moveZeroes')

describe('moveZeroes:', () => {
  it('The result shold be [1,3,12,0,0]', () => {
   let nums = [0,1,0,3,12],
       expectArr = [1,3,12,0,0],
      resultArr = moveZeroes(nums);
    expect(resultArr).toEqual(expect.arrayContaining(expectArr))
  });
  it('The result shold be [1,0,0]', () => {
    let nums = [0,0,1],
        expectArr = [1,0,0],
       resultArr = moveZeroes(nums);
     expect(resultArr).toEqual(expect.arrayContaining(expectArr))
   })
})