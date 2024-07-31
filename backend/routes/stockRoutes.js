const express = require('express');
const router = express.Router();
const { getStocks, getStock } = require('../controllers/stockController');

router.get('/', getStocks);
router.get('/:symbol', getStock);

module.exports = router;
