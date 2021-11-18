/*
Given an array, rotate the array to the right by k steps, where k is non-negative.



Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 */

//option 1
var rotate = (nums, k) => {
  nums.unshift(...nums.splice(nums.length-k,k));
  return nums

}

//Option 2
var rotate = (nums, k) => {
  let i = 0;
  while (i < k) {
    nums.unshift(nums.pop())
    i++
  }
  return nums
}

//option 3  note: (i + k) % nums.length when k > nums.length
var rotate = (nums, k) => {
  if( k == 0) return;
  if (nums == null || nums.length == 0) return;
  let result  = [];
  for( let i = 0; i < nums.length; i++) {
      let idx = (i + k) % nums.length;
      result[idx] = nums[i];
  }

  //assign back to original array
  for( let i = 0; i < nums.length; i++){
      nums[i] =result[i];
  }
  return nums
}

module.exports = rotate;

