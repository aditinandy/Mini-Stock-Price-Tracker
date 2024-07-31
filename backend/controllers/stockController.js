const Stock = require('../models/stockModel');

const predefinedStocks = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'TSLA'];

const getStocks = async (req, res) => {
  const stocks = await Stock.find({});
  res.json(stocks);
};

const getStock = async (req, res) => {
  const stock = await Stock.findOne({ symbol: req.params.symbol });
  res.json(stock);
};

const updateStockPrices = async () => {
  predefinedStocks.forEach(async (symbol) => {
    const price = (Math.random() * 1000).toFixed(2);
    await Stock.updateOne({ symbol }, { price }, { upsert: true });
  });
};

module.exports = {
  getStocks,
  getStock,
  updateStockPrices,
};
