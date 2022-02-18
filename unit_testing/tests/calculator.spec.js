const { expect } = require('chai');
const calculator = require('../src/calculator');

describe('Calculator', () => {
  describe('.v', function () {
    it('should return positive number', function () {
      // TODO: write test case to test calculator(3).v
      expect(calculator(3).v).to.eq(3);
    });

    it('should return negative number', function () {
      // TODO: write test case to test calculator(-3).v
      expect(calculator(-3).v).to.eq(-3);
    });
  });

  describe('.add', function () {
    it('should return 8 when adding 3 and 5', function () {
      // TODO: write test case to test calculator(3).add(5).v
      expect(calculator(3).add(5).v).to.eq(8);
    });

    it('should return -2 when adding 3 and -5', function () {
      // TODO: write test case to test calculator(3).add(-5).v
      expect(calculator(3).add(-5).v).to.eq(-2);
    });

    it('should return -8 when adding -3 and -5', function () {
      // TODO: write test case to test calculator(-3).add(-5).v
      expect(calculator(-3).add(-5).v).to.eq(-8);
    });
  });

  describe('.minus', function () {
    it('should return 1 when subtracting 3 and 2', function () {
      // TODO: write test case to test calculator(3).minus(2).v
      expect(calculator(3).minus(2).v).to.eq(1);
    });

    it('should return 5 when subtracting 3 and -2', function () {
      // TODO: write test case to test calculator(3).minus(-2).v
      expect(calculator(3).minus(-2).v).to.eq(5);
    });

    it('should return -1 when subtracting -3 and -2', function () {
      // TODO: write test case to test calculator(-3).minus(-2).v
      expect(calculator(-3).minus(-2).v).to.eq(-1);
    });
  });

  describe('.times', function () {
    it('should return 30 when multiplying 3 and 10', function () {
      // TODO: write test case to test calculator(3).times(10).v
      expect(calculator(3).times(10).v).to.eq(30);
    });

    it('should return -30 when multiplying 3 and -10', function () {
      // TODO: write test case to test calculator(3).times(-10).v
      expect(calculator(3).times(-10).v).to.eq(-30);
    });

    it('should return 30 when multiplying -3 and -10', function () {
      // TODO: write test case to test calculator(-3).times(-10).v
      expect(calculator(-3).times(-10).v).to.eq(30);
    });
  });

  describe('.sqrt', function () {
    it('should preform sqrt', function () {
      // TODO: write test case to test calculator(4).sqrt().v
      expect(calculator(4).sqrt().v).not.equal(Error);
    });

    it('should throw error for negative squared root', function () {
      // TODO: write test case to test calculator(-3).sqrt()
      expect(() => calculator(-3).sqrt().v).to.throw();
    });
  });

  describe('.divide', function () {
    it('should return 5 when dividing 10 and 2', function () {
      // TODO: write test case to test calculator(10).divide(2).v
      expect(calculator(10).divide(2).v).to.eq(5);
    });

    it('should return -5 when dividing 10 and -2', function () {
      // TODO: write test case to test calculator(10).divide(-2).v
      expect(calculator(10).divide(-2).v).to.eq(-5);
    });

    it('should return 5 when dividing -10 and -2', function () {
      // TODO: write test case to test calculator(-10).divide(-2).v
      expect(calculator(-10).divide(-2).v).to.eq(5);
    });

    it('should throw error when dividing by zero', function () {
      // TODO: write test case to test calculator(5).divide(0)
      expect(() => calculator(5).divide(0).v).to.throw();
    });
  });

  describe('.modulo', function () {
    it('should return the remainder', function () {
      // TODO: write test case to test calculator(10).modulo(5).v
      expect(calculator(10).modulo(5).v).to.eq(0);
    });
  });

  describe('.toString', function () {
    it('should to be a string not to be undefined', function () {
    // TODO: write test case to test calculator(10).toString() to be a string and not to be undefined
    expect(calculator(10).toString()).to.be.a('string').but.not.an('undefined');
    
  });
});

  it('should perform chained operations', function () {
    // TODO: write test case to test calculator(3).add(4).minus(3).times(6).v
    expect(calculator(3).add(4).minus(3).times(6).v).to.be.eq(24);
  });
});
