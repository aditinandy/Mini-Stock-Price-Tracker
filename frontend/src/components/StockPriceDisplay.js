import React from 'react';

function StockPriceDisplay({ selectedStock, price }) {
  return (
    <div>
      <h2>{selectedStock}</h2>
      <p>Current Price: ${price}</p>
    </div>
  );
}

export default StockPriceDisplay;
