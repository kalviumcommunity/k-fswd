const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PUBLIC_PORT;

app.use(express.json());

// 1. define a POST route
// 2. use the below json object as request body to test the route from bruno

// { "best_ug_degree": "kalvium" }


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
