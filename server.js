
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth.routes.js';
import buyerRoutes from './routes/buyer.routes.js';
import sellerRoutes from './routes/seller.routes.js';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();
const app = express();
const PORT = 3000;
app.use(cors())
app.use(bodyParser.json());

// Connect to MongoDB

mongoose.connect(process.env.MONGOURI,).then(() => {
    console.log(`MongoDB Connected`);
})



app.get('/', (req, res) => {

    res.end(" <h1> Welcome To Unity ");
})


app.use('/api/auth', authRoutes);
app.use('/api/buyer', buyerRoutes);
app.use('/api/seller', sellerRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port :  http://localhost:${PORT}`);
});



 







 