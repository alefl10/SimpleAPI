const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    res.send('GET api/ route OK!');
  })
  .post((req, res) => {
    res.send('POST api/ route OK!');
  });

router.route('/:id')
  .put((req, res) => {
    res.send('PUT api/ route OK!');
  })
  .delete((req, res) => {
    res.send('DELETE api/ route OK!');
  });

module.exports = router;
