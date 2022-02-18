/**
 * It recieves an array of strings, integers and array like itself.
 * Return the summary of all integers in it on * any level.
 *
 * @param {Array} elements
 * @returns {number} summary of all integers or 0 in other cases
 */
 function arraySum(elements) {
    //PLACE YOUR CODE BETWEEN THIS...
    let summary = 0;
    if(Array.isArray(elements)) {
        elements.flat(Infinity).forEach((elem) => {
            if(elements.length > 1) {
                if(typeof(elem) === 'number') {
                    summary+= elem;
                };
            };
        });
    };
    return summary;
};
//AND THIS LINE!

module.exports = arraySum;
