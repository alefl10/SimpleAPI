const _ = require('lodash');

exports.get = (req, res) => {
  const {
    contacts,
  } = req;
  console.log('Serving found users....');
  res.json(contacts);
};

exports.post = (req, res) => {
  const {
    saved,
  } = req;
  res.json(saved);
};
