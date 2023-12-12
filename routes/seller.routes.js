import express from 'express';
import { createCatalog, getOrders } from '../controllers/seller.controller.js';

const router = express.Router();

router.post('/create-catalog/:seller_id', createCatalog);
router.get('/orders/:seller_id', getOrders);

export default router;
