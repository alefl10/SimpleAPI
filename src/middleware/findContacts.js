const Contact = require('../api/contact/contactModel');

exports.findContacts = function () {
  return function (req, res, next) {
    Contact.find({})
      .then((contacts) => {
        console.log('Finding users.......');
        req.contacts = contacts;
        next();
      })
      .catch((err) => {
        next(err);
      });
  };
};
