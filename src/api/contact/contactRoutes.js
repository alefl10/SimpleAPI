const router = require('express').Router();
const controller = require('./contactController');
const {
  findContacts,
  findOne,
} = require('../../middleware/findContacts');
const {
  saveContact,
} = require('../../middleware/saveContact');


router.param('id', findOne());

router.route('/')
  .get(findContacts(), controller.get)
  .post(saveContact(), controller.post);

router.route('/:id')
  .get(controller.getOne)
  .put((req, res) => {
    res.send('PUT api/ route OK!');
  })
  .delete((req, res) => {
    res.send('DELETE api/ route OK!');
  });

module.exports = router;
