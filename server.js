const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PUBLIC_PORT ?? 8000;

app.use(express.json());

// Task 1
// user.json file is defined in the same directory as server.js
// Create a suitable endpoint to update only name in the user.json file
// After creating the endpoint make the request from bruno
// Endpoint: /update-user

// Task 2
// Create a suitable endpoint to replace the entire user object in user.json file
// After creating the endpoint make the request from bruno
// Endpoint: /replace-user


if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}

module.exports = app;
