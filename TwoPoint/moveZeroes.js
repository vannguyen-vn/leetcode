/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.



Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
*/

//Option 1
var moveZeroes = (nums) => {
  for(i = nums.length -1; i >=0; i -- ){
    if(nums[i] === 0) {
      nums.splice(i,1);
      nums.push(0);
    }
  }
  return nums
}

//Option 2

var moveZeroes = (nums) => {
  let count = 0;

  for (let i = 0; i < nums.length; i++){
      if(nums[i] !== 0){
        // nums[count] = num[i], count ++
          nums[count++] = nums[i];
      }
  }

  for (let i = count; i < nums.length; i++){
      nums[i] = 0;
  }
  return nums
}

module.exports = moveZeroes