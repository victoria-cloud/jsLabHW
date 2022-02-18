/**
 * It reverses the given object, i.e. return a copy of the object
 * where the keys have become the values and the values the keys
 *
 * @param {object} o the object
 * @returns {object} the new object
 */

function reverse(obj) {
    if (typeof obj !== 'object') {
        throw new Error();
    }
    else {
        let revobj = {};
        for(let key in obj){
        revobj[obj[key]] = key;
    }
        return revobj;
    }
}

module.exports = reverse;