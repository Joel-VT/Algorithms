// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/* 
  Given a string, find the length of the longest substring without repeating characters.
*/

const str1 = "abcabcbb";
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const str4 = "dvadf";
const expected4 = 4;
// Explanation: "vadf"

/**
 * Determines the length of the longest substring in the given str.
 * @param {string} str
 * @returns {number} Length of the longest substring from the given str.
 * - Time: O(?).
 * - Space: O(?).
 */

const str3 = "pwwkew";
const expected3 = 3;
function lengthOfLongestSubString(str) {

    let stringLength = 0;

    for (i = 0; i < str.length; i++) {
        let currentString = "";

        for (j = i; j < str.length; j++) {
            if (currentString.includes(str[j])) {
                break;
            }
            else {
                currentString += str[j];
            }
        }
        stringLength = stringLength > currentString.length ? stringLength : currentString.length;
    }
    return stringLength;
}

console.log(lengthOfLongestSubString(str1))
console.log(lengthOfLongestSubString(str2))
console.log(lengthOfLongestSubString(str3))
console.log(lengthOfLongestSubString(str4))