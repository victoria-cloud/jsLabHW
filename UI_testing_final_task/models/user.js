import faker from 'faker';

export const user = {
  email: `test+${Date.now()}@example.com`,
  password: faker.internet.password(),
  // eslint-disable-next-line no-magic-numbers
  username: faker.internet.userName().replace(/[\W+_]/g, '').toLowerCase().slice(0, 10),
};
