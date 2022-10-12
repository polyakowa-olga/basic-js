const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = [...str];
  let res = [];
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      counter++;
      if (counter > 1) res.push(counter);
      res.push(arr[i]);
      counter = 0;
    } else {
      counter++;
    }
  }

  return res.join("");
}

module.exports = {
  encodeLine
};
