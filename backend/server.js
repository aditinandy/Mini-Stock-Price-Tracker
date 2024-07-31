const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const stockRoutes = require('./routes/stockRoutes');
const { updateStockPrices } = require('./controllers/stockController');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

updateStockPrices();
setInterval(updateStockPrices, 60000);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/stocks', stockRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
