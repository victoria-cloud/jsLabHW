import faker from 'faker';

export const article = {
  author: faker.name.findName(),
  title: 'My api article',
  description: faker.lorem.sentence(),
  body: faker.lorem.sentences(),
  tagList: [faker.name.findName()]
};
