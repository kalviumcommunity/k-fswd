const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;

const startDatabase = async () => {
  if (!mongoServer) {
    mongoServer = await MongoMemoryServer.create();
  }
  const mongoUri = mongoServer.getUri();
  await mongoose.connect(mongoUri);

  console.log('📦 database connected!');
};

const stopDatabase = async () => {
  await mongoose.disconnect();
  await mongoServer.stop();

  console.log('📦 database closed!');
};

module.exports = {
  startDatabase,
  stopDatabase,
};
