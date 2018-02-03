const express = require('express');
const api = require('./api/api');

const app = express();
require('./middleware/appMiddleware.js')(app);

app.use('/api', api);

app.use((err, req, res) => {
  console.log('An error has ocurred');
  console.log(err.message);
  res.status(500).json(err);
});

module.exports = app;
