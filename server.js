const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PUBLIC_PORT;

app.use(express.json());

// Task 1
// user.json file is defined in the same directory as server.js
// Create a suitable endpoint to update only name in the user.json file
// After creating the endpoint make the request from bruno

// Task 2
// Create a suitable endpoint to replace the entire user object in user.json file
// After creating the endpoint make the request from bruno


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
