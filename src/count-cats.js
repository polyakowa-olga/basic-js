const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(/* matrix */) {
  let countEars = 0;

  [...arguments].forEach((elem) => {
    elem.forEach((el) => {
      for (let i = 0; i < el.length; i++) {
        if (el[i] === "^^") {
          countEars++;
        }
      }
    });
  });

  return countEars;
}

module.exports = {
  countCats
};
