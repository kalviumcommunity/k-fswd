const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./db');
const NodeCache = require('node-cache');

const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

app.get('/api/doors', (req, res) => {
    try {
        let data = cache.get('doors');
        if (!data) {
            data = db;
            cache.set('doors', data);
        }
        
        return res.status(200).json({ data });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
})

app.post('/api/doors', (req, res) => {
    // your code here
})

app.listen(PORT, () => {
    console.log(`🚀 server running on PORT: ${PORT}`);
});