/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left<=right) {
        let mid = Math.floor(nums.length / 2);
        if (nums[mid] === target) return mid;
        
        // Check if the left side is sorted
        if(nums[left]<=nums[mid]){
            // checking if the target is on the left side of mid
            if(nums[left] <= target && target <= nums[mid]) right = mid-1;
            // if target is on the right side
            else left = mid+1;
        }
        // The right is sorted
        else{
            if(nums[mid] <= target && target <= nums[right]) left = mid+1;
            else right = mid-1;
        }
    }
    return -1;
};

let arr = [4,5,6,7,8,0,1,2]

console.log(search(arr, 8));