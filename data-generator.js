const { faker } = require('@faker-js/faker')

const generateData = () => {
  const user = [];
  for (let i = 0; i < 20; i++) {
    user.push({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      address: faker.location.streetAddress(),
      image: faker.image.avatar(),
      company: faker.company.name(),
    });
  }
  return user;
}

module.exports = generateData;
