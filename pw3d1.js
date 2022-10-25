const numsA = [-2, 5, 7, 0, 3];
const expectedA = 2;

const numsB = [9, 9];
const expectedB = -1;

const numsC = [1,1,1,1,1,9,1,1,1,1,1]
const expectedC = 5



/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) {
    if(nums.length >= 3){
        for(var i =1; i< nums.length -1; i++){
            var suml=0
            var sumr = 0
            for(var j = 0; j < i; j++){
                suml += nums[j]
            }
            for(var k = i+1; k < nums.length; k++){
                sumr += nums[k]
            }
            if(suml == sumr){
                return i
            }
        }
    }
    return -1
}

console.log(balanceIndex(numsA)) // 2
console.log(balanceIndex(numsB)) // -1
console.log(balanceIndex(numsC)) // 5