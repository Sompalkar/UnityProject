const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth.routes');
const buyerRoutes = require('./routes/buyer.routes');
const sellerRoutes = require('./routes/seller.routes');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();


const app = express();
const PORT = 3000;
app.use(cors());

app.use(bodyParser.json());

// Connect to MongoDB
// console.log(process.env.MONGOURI)
mongoose.connect(process.env.MONGOURI);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/buyer', buyerRoutes);
app.use('/api/seller', sellerRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
