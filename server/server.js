const express = require('express');
const app = express();
const port = process.env.SECONDARY_PUBLIC_PORT ?? 8000;

const countryList = require('./countryList.json');
const Country = require('./country.model.js');
const { startDatabase, stopDatabase } = require('./db');

const insertIntoDB = async () => {
  await Country.insertMany(countryList);
};

app.get('/api/country', async (req, res) => {
  try {
    const countries = await Country.find({});
    return res.status(200).json({ list: countries });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

process.on('SIGINT', async () => {
  await stopDatabase();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await startDatabase.stopDatabase();
  process.exit(0);
});

if (require.main === module) {
  app.listen(port, async () => {
    await startDatabase();
    await insertIntoDB();

    console.log(`🚀 server running on PORT: ${port}`);
  });
}

module.exports = app;
