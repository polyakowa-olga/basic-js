const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  if (
    !date.getMonth ||
    !date.getYears ||
    !date.toString ||
    !date.getFullYear ||
    !date.getDate ||
    !date.getHours ||
    !date.getMinutes ||
    !date.getSeconds ||
    !date.getMilliseconds ||
    !date.getDay
  ) {
    throw new Error("Invalid date!");
  }
if(date.getMonth) {
    const month = date.getMonth();

  if (month == 0 || month == 1 || month == 11) return "winter";
  else if (month > 1 && month < 5) return "spring";
  else if (month >= 5 && month < 8) return "summer";
  else if (month >= 8 && month < 11) return "fall";
}

}



module.exports = {
  getSeason
};
