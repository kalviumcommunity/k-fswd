const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./db');

app.get('/api/doors', (req, res) => {
    // your code here
    return res.status(200).json(db);
})

app.listen(PORT, () => {
    console.log(`🚀 server running on PORT: ${PORT}`);
});