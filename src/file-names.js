const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let arr = [];

  if ([...new Set(names)].length == names.length) {
    return names;
  } else {
    for (let i = 0; i < names.length; i++) {
      if (arr.includes(names[i])) {
        let safe = names[i];
        names[i] = `${names[i]}(${arr.filter((el) => el == names[i]).length})`;
        arr.push(safe);
      } else {
        arr.push(names[i]);
      }
    }
    return renameFiles(names);
  }
}

module.exports = {
  renameFiles
};
