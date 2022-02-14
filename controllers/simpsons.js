const express = require('express');
const createSimpson = require('../middlewares/createSimpson');
const getSimpsons = require('../middlewares/getSimpsons');
const getSimpsonsById = require('../middlewares/getSimpsonsById');
const validateNameSimpson = require('../middlewares/validateNameSimpson');
const validateSimpson = require('../middlewares/validateSimpson');


const router = express.Router();
router.get('/', getSimpsons);
router.get('/:id', getSimpsonsById);
router.post('/', validateSimpson, validateNameSimpson, createSimpson);



module.exports = router;