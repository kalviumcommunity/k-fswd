const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

// A singleton to ensure we only start the database once
// assign the MongoMemoryServer instance to mongoServer
let mongoServer;
let connectionStatus = 'disconnected';

const getMongoUri = async () => {
  if (mongoServer) {
    return mongoServer.getUri();
  }

  mongoServer = await MongoMemoryServer.create();
  return mongoServer.getUri();
};

const startDatabase = async (mongoUri) => {
  // your code here
};

const stopDatabase = async () => {
  if (!mongoServer) {
    return;
  }

  await mongoose.disconnect().then(() => (connectionStatus = 'disconnected'));
  await mongoServer.stop();
};

const getConnectionStatus = () => connectionStatus;

module.exports = {
  getMongoUri,
  startDatabase,
  stopDatabase,
  getConnectionStatus,
};
