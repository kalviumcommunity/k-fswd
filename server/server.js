const express = require('express');
const app = express();
const startDatabase = require('./db');
const port = process.env.PUBLIC_PORT ?? 8000;
const countryList = require('./countryList.json');
const Country = require('./country.model.js');
const cors = require('cors');

app.use(cors());

const insertIntoDB = async () => {
    await Country.insertMany(countryList);
}

app.get('/api/country', async (req, res) => {
    try {
        const countries = await Country.find({});
        return res.status(200).json({list: countries});
    }
    catch (err) {
        return res.status(500).json({ error: err });
    }
})

if (require.main === module) {
    app.listen(port, async () => {
        await startDatabase();
        await insertIntoDB();
        console.log(`🚀 server running on PORT: ${port}`);
    });
}

module.exports = app;