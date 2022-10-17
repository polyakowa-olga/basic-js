const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  if(typeof str !== 'string') {
    str = String(str)
   }

  if (options.repeatTimes == 1) {
    return str
  }
  if(!options.separator) {
    options.separator = '+'
  }
  if(!options.additionSeparator) {
    options.additionSeparator = '|'
  }

   if(typeof options.addition !== 'string') {
    options.addition = String(options.addition)
    }


  let add = [...((options.addition + options.additionSeparator).repeat(options.additionRepeatTimes))];
  add.splice(-options.additionSeparator.length, options.additionSeparator.length);
  let allAdd = add.join('');
  console.log(allAdd)
 
  let string = [...((str + allAdd + options.separator).repeat(options.repeatTimes))]
  console.log(string)
  string.splice(-options.separator.length, options.separator.length);
 
  return string.join('');
 
 }
 

module.exports = {
  repeater
};
