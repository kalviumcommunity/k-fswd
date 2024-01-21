const { fakerEN_IN: faker } = require('@faker-js/faker');

const generateData = () => {
  // Create a user and Squad
  const user = {};

  user._id = faker.database.mongodbObjectId();
  user.firstName = faker.person.firstName();
  user.lastName = faker.person.lastName();
  user.age = faker.number.int({ min: 18, max: 99 });
  user.email = faker.internet.email({
    firstName: user.firstName,
    lastName: user.lastName,
  });

  const squad = {};
  squad.name = 'Squad ' + faker.number.int({ min: 1, max: 99 });
  squad.description = faker.company.catchPhrase();
  squad.members = [user._id];

  return { user, squad };
};

module.exports = generateData;
