/**
 * It returns the property names of the given object.
 *
 * @param {object} o the object
 * @returns {string[]} the list of the properties of the object or empty array if it is not an object
 */

function properties(obj) {
    if(typeof(obj) !== 'object') { 
        return [];
    } else {
    let objKeys = Object.keys(obj)
    return objKeys
    }
}

module.exports = properties;