const generateData = require('./data-generator');
const { startDatabase, stopDatabase } = require('./db');
const User = require('./model/User');
const Squad = require('./model/Squad');

const { user, squad } = generateData();
console.log(user);
console.log(squad);

const insertIntoDB = async () => {
  await startDatabase();

  await User.create(user);
  await Squad.create(squad);

  await stopDatabase();
};

insertIntoDB();
