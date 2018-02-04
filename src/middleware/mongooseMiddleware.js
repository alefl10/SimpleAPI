const Contact = require('../api/contact/contactModel');
const _ = require('lodash');

// Find all contacts in DB
const findContacts = function () {
  return function (req, res, next) {
    Contact.find({})
      .then((contacts) => {
        req.respond = contacts;
        next();
      })
      .catch((err) => {
        next(err);
      });
  };
};
// Find one contact in DB
const findOne = function () {
  return function (req, res, next, id) {
    Contact.findById(id)
      .then((contact) => {
        if (contact === undefined || contact === null) {
          next(new Error('No Contact with that id'));
        } else {
          req.respond = contact;
          next();
        }
      })
      .catch((err) => {
        next(err);
      });
  };
};
// Save Contact in DB
const saveContact = function () {
  return function (req, res, next) {
    const newContact = new Contact(req.body);
    newContact.save()
      .then((saved) => {
        req.respond = saved;
        next();
      })
      .catch((err) => {
        next(err);
      });
  };
};
// Update Contact
const updateContact = function () {
  return function (req, res, next) {
    const {
      respond: contact,
      body: update,
    } = req;
    _.merge(contact, update);
    contact.save()
      .then((saved) => {
        req.respond = saved;
        next();
      })
      .catch((err) => {
        next(err);
      });
  };
};


module.exports = {
  findContacts,
  findOne,
  saveContact,
  updateContact,
};
