import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StockSelector from './components/StockSelector';
import StockPriceDisplay from './components/StockPriceDisplay';

const predefinedStocks = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'TSLA'];

function App() {
  const [selectedStock, setSelectedStock] = useState(predefinedStocks[0]);
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchPrice = async () => {
      const response = await axios.get(`http://localhost:5000/api/stocks/${selectedStock}`);
      setPrice(response.data.price);
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 60000);

    return () => clearInterval(interval);
  }, [selectedStock]);

  return (
    <div>
      <h1>Stock Price Tracker</h1>
      <StockSelector selectedStock={selectedStock} setSelectedStock={setSelectedStock} />
      <StockPriceDisplay selectedStock={selectedStock} price={price} />
    </div>
  );
}

export default App;
