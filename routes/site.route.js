const express = require('express');
const siteController = require('../controllers/site.controller');
const router = express.Router();


router.use('/search', siteController.search);
router.use('/', siteController.index);

module.exports = router;
