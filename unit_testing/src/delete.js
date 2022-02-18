/**
 * It deletes the given property of the given object
 * and returns the new object.
 * The function must not modify the original object!
 *
 * @param {object} o the object
 * @param {string} key the name of the property to delete
 * @returns {object} the new object without the given property
 */
module.exports = function del(o, key) {
  // PLACE YOUR CODE BETWEEN THIS...
  if(typeof(o) !== 'object') {
    throw Error('[Error] Please, provide an object as a parameter');
  } else {
  const copy = {...o}
  delete copy[key]
  return copy
  }
  // ...AND THIS COMMENT LINE!
};
