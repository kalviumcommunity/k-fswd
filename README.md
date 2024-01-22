# Lab Exercise: Write the Code to Connect to Mongoose Database

## 🎯 Objectives
In this lesson, we'll learn to write the code to establish a connection to a MongoDB database using Mongoose. We'll understand the basic setup, configuration, and error handling.

## 📚 Prerequisites
You should have Node.js installed and basic knowledge of JavaScript.

## 🚀 Steps

0. **Save the configuration file**: Save the MongoDB URI and database name in a configuration file. We'll use this configuration file to connect to the database.
  > See the [configuration file](./config.js) for reference.

1. **Install Mongoose**: Run `npm install mongoose` in your project directory to install Mongoose.

2. **Import Mongoose**: In your code file, import mongoose with `const mongoose = require('mongoose')`.

3. **Connect to MongoDB**: Use the `mongoose.connect()` method to connect to your MongoDB. Inside this method, pass your MongoDB URI and an options object.

4. **Handle Connection Events**: Mongoose connection events like 'connected', 'error', and 'disconnected'.

5. **Close Connection**: It's good practice to close the Mongoose connection when your application ends.

## 🏁 Outcome

By the end of this lesson, you'll be able to establish a connection to a MongoDB database using Mongoose, handle connection events, and close the connection properly. Happy coding! 🎉
