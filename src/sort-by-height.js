const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let indexKeeper = [];
  arr.forEach((item, index) => {
    if (item == -1) indexKeeper.push(index);
  });
  let arrSort = arr.filter((el) => el !== -1).sort((a, b) => a - b);

  for (let i = 0; i < indexKeeper.length; i++) {
    arrSort.splice(indexKeeper[i], 0, -1);
  }

  return arrSort;
}

module.exports = {
  sortByHeight
};
