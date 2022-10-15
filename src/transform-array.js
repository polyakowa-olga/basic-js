const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let array = arr.slice();

  //console.log(`start: ${array}`);

  for (let i = 0; i < array.length; i++) {
    let prev = array[i - 1];
    let current = array[i];
    let next = array[i + 1];

    if (
      (current === "--double-next" && (!next || typeof next === "string")) ||
      (current === "--discard-next" && (!next || typeof next === "string")) ||
      (current === "--double-prev" && !prev) ||
      (current === "--discard-prev" && !prev)
    ) {
      console.log("block 1");
      array.splice(i, 1);
    } else if (current === "--double-next") {
      console.log("block 2");
      array.splice(i, 1, next);
    } else if (current === "--discard-next") {
      console.log(array.splice(i + 1, 1));
      array.splice(i + 1, 1);
      array.splice(i, 1);
    } else if (current === "--double-prev") {
      inter = prev;
      array.splice(i, 1, inter);
    } else if (current === "--discard-prev") {
      array.splice(i - 1, 1);
      array.splice(i - 1, 1);
    }
  }
  //      console.log(`end: ${array}`);
  return array;
}

module.exports = {
  transform
};
