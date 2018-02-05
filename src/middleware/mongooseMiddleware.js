const Contact = require('../api/contact/contactModel');
const _ = require('lodash');

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
        res.status(500).json({
          message: `Could not find contact with id ${req.params.id}`,
          error: err,
        });
        next();
      });
  };
};

// Find all contacts in DB
const findContacts = function () {
  return function (req, res, next) {
    Contact.find({})
      .then((contacts) => {
        req.respond = contacts;
        next();
      })
      .catch((err) => {
        res.status(500).json({
          message: 'Something went wrong',
          error: err,
        });
        next();
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
        res.status(500).json({
          message: 'Could not post contact',
          error: err,
        });
        next();
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
    if (contact !== undefined || contact !== null) {
      contact.save()
        .then((saved) => {
          req.respond = saved;
          next();
        })
        .catch((err) => {
          res.status(500).json({
            message: `Could not update contact with id ${req.params.id}`,
            error: err,
          });
          next();
        });
    }
  };
};

// Delete contact
const deleteContact = function () {
  return function (req, res, next) {
    const {
      respond: contact,
    } = req;
    if (contact !== undefined || contact !== null) {
      contact.remove()
        .then((removed) => {
          req.respond = {
            message: 'Contact was deleted successfully',
            deletedContact: removed,
          };
          next();
        })
        .catch((err) => {
          res.status(500).json({
            message: `Could not remove a contact with id ${req.params.id}`,
            error: err,
          });
          next();
        });
    }
  };
};

module.exports = {
  findContacts,
  findOne,
  saveContact,
  updateContact,
  deleteContact,
};
