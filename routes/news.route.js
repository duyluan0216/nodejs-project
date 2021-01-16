const express = require('express');
const newsController = require('../controllers/news.controller');
const router = express.Router();


router.get('/:slug', newsController.show);
router.get('/', newsController.index);

module.exports = router;
