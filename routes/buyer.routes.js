import express from 'express';
import { getListOfSellers, getSellerCatalog, placeOrder } from '../controllers/buyer.controller.js';

const router = express.Router();

router.get('/list-of-sellers', getListOfSellers);
router.get('/seller-catalog/:seller_id', getSellerCatalog);
router.post('/create-order/:seller_id', placeOrder);

export default router;
