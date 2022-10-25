/* 
  String Anagrams
  Given a string,
  return array where each element is a string representing a different anagram (a different sequence of the letters in that string).
  Ok to use built in methods
*/

const str1 = "lim";
const expected1 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];
// Order of the output array does not matter

/**
 * Add params if needed for recursion.
 * Generates all anagrams of the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {Array<string>} All anagrams of the given str.
 */
// You will need more parameters!
function generateAnagrams(word) {
    if (word.length < 2) {
        return [word];
    } else {
        var allAnagrams = [];
        for (var i = 0; i < word.length; i++) {
            var letter = word[i];
            var shorterWord = word.substr(0, i) + word.substr(i + 1, word.length - 1);
            console.log(shorterWord)
            var shortwordArray = generateAnagrams(shorterWord);
            for (var j = 0; j < shortwordArray.length; j++) {
                allAnagrams.push(letter + shortwordArray[j]);
            }
        }
        return allAnagrams;
    }
}

console.log(generateAnagrams(str1)) //["ilm", "iml", "lim", "lmi", "mil", "mli"] (order may vary, that's okay)
