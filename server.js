const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PUBLIC_PORT;

app.use(express.json());

// use the endpoint below and hit the end point with the following data:
// { "best_ug_degree": "kalvium" }
app.post('/', (req, res) => {
    const data = req.body;

    fs.writeFile('data.js', JSON.stringify(data, null, 2), (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error writing to file');
        } else {
            res.status(200).send('Data written to file');
        }
    });
});

app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});

module.exports = app;
