const { faker } = require('@faker-js/faker');

const genrateData = () => {
  return Array.from({ length: 25 }, () => ({
    name: faker.person.fullName(),
    age: faker.number.int({ min: 15, max: 45 }),
    grades: Array.from({ length: 5 }, () =>
      faker.number.float({ min: 60, max: 100, precision: 2 })
    ),
  }));
};

module.exports = genrateData;
