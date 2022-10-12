const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let arr1 = [...s1];
  let arr2 = [...s2];
  let res = [];
  arr1.forEach((el) => {
    for (let i = 0; i < arr2.length; i++) {
      if (el == arr2[i]) {
        res.push(el);
        arr2.splice(i, 1);
        break;
      }
    }
  });
  return res.length;
}


module.exports = {
  getCommonCharacterCount
};
