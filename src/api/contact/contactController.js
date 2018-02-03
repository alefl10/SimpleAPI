const _ = require('lodash');

exports.getOne = (req, res) => {
  const {
    contact,
  } = req;
  res.json(contact);
};

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
