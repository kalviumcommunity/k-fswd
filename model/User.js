const mongoose = require('mongoose');

// Define the schema for a user object
const userSchema = new mongoose.Schema({

});

// Create a model from the schema
const User = mongoose.model('users', userSchema);

module.exports = User;
