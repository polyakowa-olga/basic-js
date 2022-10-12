const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
   const arr = [...n.toString()];
   let max = 0;

   for (let i = 0; i < arr.length; i++) {
     let arr2 = arr.slice();
     arr2.splice(i, 1);
     if (Number(arr2.join("")) > max) max = Number(arr2.join(""));
   }
   return max;
}

module.exports = {
  deleteDigit
};
