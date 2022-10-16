const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let domen = [];
  let arr = email.split('').reverse();
 // console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] !== '@') {
      domen.unshift(arr[i])
    } else break;

  
    
  }
  console.log(domen)


  return domen.join('');
}

module.exports = {
  getEmailDomain
};
