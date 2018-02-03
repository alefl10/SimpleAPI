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

exports.findOne = function () {
  return function (req, res, next, id) {
    Contact.findById(id)
      .then((contact) => {
        if (contact === undefined || contact === null) {
          next(new Error('No Contact with that id'));
        } else {
          req.contact = contact;
          next();
        }
      })
      .catch((err) => {
        next(err);
      });
  };
};
