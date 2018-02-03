const router = require('express').Router();

router.use('/contact', require('./contact/contactRoutes'));

module.exports = router;
