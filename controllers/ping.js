const express = require('express');
const pingMiddleware = require('../middlewares/ping');
const helloMiddleware = require('../middlewares/hello')


const router = express.Router();
router.get('/', pingMiddleware);
router.post('/', helloMiddleware);

module.exports = router;