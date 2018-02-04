const router = require('express').Router();
const controller = require('./contactController');
const {
  findContacts,
  findOne,
  saveContact,
  updateContact,
} = require('../../middleware/mongooseMiddleware');

router.param('id', findOne());

router.route('/')
  .get(findContacts(), controller.respond)
  .post(saveContact(), controller.respond);

router.route('/:id')
  .get(findOne(), controller.respond)
  .put(updateContact(), controller.respond)
  .delete((req, res) => {
    res.send('DELETE api/ route OK!');
  });

module.exports = router;
