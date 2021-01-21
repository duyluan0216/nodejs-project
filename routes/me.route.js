const express = require('express');
const router = express.Router();
const meController = require('../controllers/me.controller');

router.get('/stored/courses',meController.storedCourses);
router.get('/trash/courses',meController.trashCourses);

module.exports = router;
