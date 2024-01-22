const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

// A singleton to ensure we only start the database once
// assign the MongoMemoryServer instance to mongoServer
let mongoServer;

const startDatabase = async () => {
  // Your code here
};

const stopDatabase = async () => {
  // Your code here
};

const isConnected = () => {
  return mongoose.connection.readyState === 1;
}

module.exports = { startDatabase, stopDatabase, isConnected };
