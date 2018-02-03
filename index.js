const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('You accessed this sample API');
});

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
