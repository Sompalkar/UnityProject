import express from 'express';

import { getListOfSellers, getSellerCatalog, createOrder } from '../controllers/buyer.controller.js';

import verifyToken from '../middlewares/auth.middleware.js';


const router = express.Router();


router.use(verifyToken);

router.get('/list-of-sellers', getListOfSellers);

router.get('/seller-catalog/:seller_id', getSellerCatalog);

router.post('/create-order/:seller_id', createOrder);



export default router;
