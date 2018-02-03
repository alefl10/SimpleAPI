const Contact = require('../api/contact/contactModel');

exports.saveContact = function () {
  return function (req, res, next) {
    const newContact = new Contact(req.body);
    newContact.save()
      .then((saved) => {
        req.saved = saved;
        next();
      })
      .catch((err) => {
        next(err);
      });
  };
};
