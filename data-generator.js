const { faker } = require('@faker-js/faker');

const genrateData = () => {
  return Array.from({ length: 25 }, () => ({
    name: faker.person.fullName(),
    email: faker.internet.email(),
    personal: {
      back_account_number: faker.finance.accountNumber(),
      dob: faker.date.past({ years: faker.number.int({ min: 18, max: 65 }) }),
      zip_code: faker.location.zipCode(),
    },
  }));
};

module.exports = genrateData;
