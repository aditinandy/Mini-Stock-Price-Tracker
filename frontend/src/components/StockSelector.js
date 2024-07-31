import React from 'react';

const predefinedStocks = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'TSLA'];

function StockSelector({ selectedStock, setSelectedStock }) {
  return (
    <select value={selectedStock} onChange={(e) => setSelectedStock(e.target.value)}>
      {predefinedStocks.map(stock => (
        <option key={stock} value={stock}>{stock}</option>
      ))}
    </select>
  );
}

export default StockSelector;
