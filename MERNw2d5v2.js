// From a technical interview with an AWS engineer: https://youtu.be/t0OQAD5gjd8

/* 
  Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
  You can assume there is always a valid solution
  These example inputs are sorted for readability, but the input is NOT guaranteed to be sorted and the output does NOT need to be in any specific order
  Hard Bonus: make it O(n) time
*/

const nums1 = [1, 1, 1, 2, 2, 3];
const k1 = 2;
const expected1 = [1, 2];
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

const nums2 = [0, 0, 0, 2, 2, 3];
const k2 = 1;
const expected2 = [0];
// Explanation: k being 1 means return the single most frequent element

// 6 occurs 6 times, 3 occurs 3 times, 2 occurs 2 times, 1 occurs 1 time.
const nums3 = [1, 6, 3, 3, 6, 6, 3, 6, 2, 2, 6, 6];
const k3 = 3;
const expected3 = [6, 3, 2];

/**
 * Returns the k most frequently occurring numbers from the given unordered
 * nums.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered.
 * @param {number} k Represents the amount of numbers that should be returned.
 * @returns {Array<number>} The k most frequently occurring numbers.
 */



function kMostFrequent(nums, k) {
    let mp = new Map();
    let results=[];

    for (let i = 0; i < nums.length; i++) {
        if (mp.has(nums[i])) {
            mp.set(nums[i], mp.get(nums[i]) + 1)
        } else {
            mp.set(nums[i], 1)
        }
    }

    let list = [...mp];
    console.log(list);

    list.sort((a, b) => {
        if (a[1] == b[1])
            return b[0] - a[0];
        else
            return b[1] - a[1];
    })


    for (let i = 0; i < k; i++){
        results.push(list[i][0]);
    }
    
    return results;
}

console.log(kMostFrequent(nums1, k1));
console.log(kMostFrequent(nums2, k2));
console.log(kMostFrequent(nums3, k3));
