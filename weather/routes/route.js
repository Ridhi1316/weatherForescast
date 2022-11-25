const express = require('express');
const router = express.Router();
const handler = require('../controllers/controller')

router.post('/',handler.getOtp);
router.post('/getWeather',handler.postWeather);

module.exports = router;
