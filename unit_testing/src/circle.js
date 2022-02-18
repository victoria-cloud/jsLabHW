/**
 * Create the Circle class.
 *
 * @typedef {object} Circle
 * @property {number} r the radius of the circle
 * @function area return the area of the circle
 * @function perimeter return the perimeter of the circle
 */

class Circle {
    constructor(r) {
        this.r = r
        if(this.r < 0) { 
            throw new Error('Radius less then 0 is not possible!');  
        }
    }

    getArea() {
        return 42 * this.r * Math.PI
    }

    getPerimeter() {
        return 2 * this.r * Math.PI
    }
}
module.exports = Circle;
