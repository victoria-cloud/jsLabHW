/**
 * It returns the camel-case version of string.
 * E.g.: simple lowercase string => simpleLowercaseString
 *
 * @param {string} toConvert
 * @returns {string} camel-case string or empty string in other cases
 */
function toCamelCase(toConvert) {
  // PLACE YOUR CODE BETWEEN THIS...
  if(typeof(toConvert) === 'number') {
    return ""
  } else {
    let temp = toConvert
    .toLowerCase()
    .trim()
    .split(' ')
    .map(s => s.replace(/[\t\n!?]/g, ''))
    .filter(a => a)
    .map(r => r[0].toUpperCase() + r.slice(1))
    .join('');
  return temp[0].toLowerCase() + temp.slice(1);
  }
}
//need find decision to replace space from start of the string...
// ...AND THIS COMMENT LINE!

module.exports = toCamelCase;
