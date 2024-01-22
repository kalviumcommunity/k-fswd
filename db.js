// 1. Read the connection parameters from config.js.
// 2. Use Mongoose to connect to the MongoDB database.
// 3. Export the Mongoose connection object.

const mongoose = require('mongoose');

const connectToDB = async () => {
  try {
    //  Your code goes here
    console.log('📦 connected to mongoDB');
  } catch (err) {
    console.error('❌ error connecting to mongoDB:', err.message);
  }
};

const disconnectFromDB = async () => {
  try {
    //  Your code goes here
    console.log('📦 disconnected from mongoDB');
  } catch (err) {
    console.error('❌ error disconnecting from mongoDB:', err.message);
  }
};

module.exports = {
  connectToDB,
  disconnectFromDB,
  mongooseConnection: mongoose.connection,
};
