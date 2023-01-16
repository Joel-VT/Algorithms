/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    /**
 * @param {number[]} nums
 * @return {number}
 */
    if (nums.length === 1 || nums[0] < nums[nums.length - 1]) return nums[0];
    if (nums[nums.length - 1] < nums[nums.length - 2]) return nums[nums.length-1];
    let left = 0;
    let right = nums.length - 1;
    while (left<=right) {
        let mid = Math.floor(nums.length / 2);
        if (nums[mid] === target) return mid;
        else if (nums[left] === target) return left;
        else if (nums[right] === target) return right;
        else if (nums[mid] < target) left = mid + 1; 
        else if (nums[mid] > target) right = mid - 1;
        else break;
    }
    return -1;
};

let arr = [4,5,6,7,8,0,1,2]

console.log(search(arr, 3));