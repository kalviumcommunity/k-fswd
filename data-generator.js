const { fakerEN_IN: faker } = require('@faker-js/faker')

const generateData = (nUsers = 10) => {
  const users = []
  const cart = [];

  for (let i = 0; i < nUsers; i++) {
    let userId = faker.string.uuid();

    users.push({
      userId: userId,
      fullName: faker.person.fullName(),
    });

    for (let j = 0; j < faker.number.int({ min: 1, max: 5 }); j++) {
      cart.push({
        productId: faker.string.uuid(),
        productName: faker.commerce.productName(),
        productPrice: faker.commerce.price(),
        userId: userId,
      });
    }
  }

  return { users, cart }
}

module.exports = generateData
