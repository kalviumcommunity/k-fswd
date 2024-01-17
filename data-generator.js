const { faker } = require('@faker-js/faker')

const generateData = () => {
  const user = [];
  for (let i = 0; i < 20; i++) {
    user.push({
      id: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      address: faker.address.streetAddress(),
      image: faker.image.avatar(),
      company: faker.company.companyName(),
    });
  }
  return user;
}

module.exports = generateData;
