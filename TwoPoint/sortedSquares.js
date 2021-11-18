/*
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.
 */

//Option 1

var sortedSquares = (nums) => {
  let result = [],
      l = 0,
      r = nums.length - 1,
      //Position the squared Item
      p = r;
  while( l <= r){
    if(nums[l]**2 > nums[r]**2) {
      result[p--] = nums[l++]**2;
    } else {
      result[p--] = nums[r--]**2;
    }
  }
  return result;
}

// Quicksort

var sortedSquares = (nums) => {
  nums = nums.map(item => item * item);
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

var quickSort = (nums, l , r) => {
  let p;
  if ( nums.length > 1 ) {
    p = partition(nums, l, r);
    if ( l  < p - 1) {
      quickSort(nums, l, p - 1);
    }
    if ( p < r ){
      quickSort(nums, p , r);
    }
  }
}

var partition = (nums, start, end) => {
  let l = start,
      r = end,
      mid = Math.floor(( r - l)/2);
  let p = nums[mid];
  while( l <= r){
    while( nums[l]< p){
      l++;
    }
    while( nums[r] > p){
      r++;
    }
    if(l <= r){
      [nums[l], nums[r]] = [nums[r], nums[l]]
      l++;
      r--;
    }
  }
  return l;
}


// MergeSort

var sortedSquares = function(nums) {
  nums = nums.map(num => num * num);
  let temp = [];
  mergeSort(nums, 0, nums.length - 1, temp);
  return nums;
};

function mergeSort(nums, start, end, temp) {
  if (start >= end) return;
  let mid =  Math.floor((start + end) / 2);
  mergeSort(nums, start, mid, temp);
  mergeSort(nums, mid + 1, end, temp);
  merge(nums, start, end, temp);
}

function merge(nums, start, end, temp) {
  let mid =  Math.floor((start + end) / 2);
  let l_index = start;
  let r_index = mid + 1;
  let index = start;
  while (l_index <= mid && r_index <= end) {
      if (nums[l_index] < nums[r_index]) {
          temp[index++] = nums[l_index++];
      } else {
           temp[index++] = nums[r_index++];
      }
  }
  while (l_index <= mid) {
      temp[index++] = nums[l_index++];
  }
  while (r_index <= end) {
      temp[index++] = nums[r_index++];
  }
  for (let i = 0; i <= end; i++)
      nums[i] = temp[i];
}

module.exports = sortedSquares;