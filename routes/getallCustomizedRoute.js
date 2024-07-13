const express = require('express');
const router = express.Router();
const getAllCustomizedController = require('../controllers/getallCustomizedController');

router.get('/', getAllCustomizedController);

module.exports = router;
