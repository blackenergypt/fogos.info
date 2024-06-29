const express = require('express');
const router = express.Router();
const pagesController = require('../controllers/pagesController');


router.get('/', pagesController.getPageHome);


module.exports = router