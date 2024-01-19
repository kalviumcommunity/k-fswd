const { fakerEN_IN: faker } = require('@faker-js/faker');

const generateData = (n) => {
  const users = [];

  for (let i = 0; i < n; i++) {
    users.push({
      id: faker.string.uuid(),
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      zodiac_sign: faker.person.zodiacSign(),
    });
  }

  return users;
};

module.exports = generateData;
