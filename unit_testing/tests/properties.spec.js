const { expect } = require('chai');
const properties = require('../src/properties');

describe('Properties', () => {
  it('should handle if parameter is not object', () => {
    expect(properties(42)).to.have.lengthOf(0);
  });

  it('should return properties of the object', () => {
    expect(
      properties({
        a: 11,
        c: 'Hello',
        hello: 'world',
      }),
    ).to.have.members(['a', 'c', 'hello']);
  });
});
