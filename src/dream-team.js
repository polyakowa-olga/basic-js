const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members) ) {return false};
  let result = [];
  (members.filter(item => typeof item == "string")).forEach(el => {
    el = [...el].filter(item => item !== ' ').join('').toUpperCase();
    result.push(el);
    console.log(el)
  });
      return result.sort().map(item => item[0]).join('');
  }



module.exports = {
  createDreamTeam
};
