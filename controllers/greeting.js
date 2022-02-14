const express = require('express');
const greeting = require('../middlewares/greeting');



const router = express.Router();
router.post('/', greeting);


module.exports = router;