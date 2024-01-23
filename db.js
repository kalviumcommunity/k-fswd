const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

// A singleton to ensure we only start the database once
// assign the MongoMemoryServer instance to mongoServer
let mongoServer;
let connectionStatus = 'disconnected';

const startDatabase = async () => {
  if (!mongoServer) {
    mongoServer = await MongoMemoryServer.create();
  }

  const mongoUri = mongoServer.getUri();

  // Simulate connection failure for testing
  if (process.env.TEST_DB_CONNECTION === 'fail') {
    return await mongoose
      .connect('invalid-mongo-uri')
      .catch(() => (connectionStatus = 'failed'));
  }

  await mongoose.connect(mongoUri).then(() => (connectionStatus = 'connected'));
};

const stopDatabase = async () => {
  if (!mongoServer) {
    return;
  }

  await mongoose.disconnect().then(() => (connectionStatus = 'disconnected'));
  await mongoServer.stop();
};

const getConnectionStatus = () => connectionStatus;

module.exports = { startDatabase, stopDatabase, getConnectionStatus };
