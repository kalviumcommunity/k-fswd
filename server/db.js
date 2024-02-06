const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

// A singleton to ensure we only start the database once
// assign the MongoMemoryServer instance to mongoServer
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
  if (!mongoServer) {
    return;
  }
  await mongoose.disconnect();
  await mongoServer.stop();
  console.log('📦 database closed!');
};

module.exports = { startDatabase, stopDatabase };
