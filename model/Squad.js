const mongoose = require('mongoose');

// Define the schema for a user object
const squadSchema = new mongoose.Schema({

});

// Create a model from the schema
const Squad = mongoose.model('squads', squadSchema);

module.exports = Squad;
