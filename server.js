const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./db');
const NodeCache = require('node-cache');

const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

app.get('/api/doors', (req, res) => {
    const data = cache.get('doors');
    if (data) {
        return res.json(data);
    }
    else {
        cache.set('doors', db);
    }
})

app.post('/api/doors', (req, res) => {
    // your code here
})

app.listen(PORT, () => {
    console.log(`🚀 server running on PORT: ${PORT}`);
});