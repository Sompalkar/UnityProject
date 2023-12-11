

import express from 'express';

import { createCatalog, getOrders } from '../controllers/seller.controller.js';

import verifyToken from '../middlewares/auth.middleware.js';



const router = express.Router();



router.use(verifyToken);

router.post('/create-catalog', createCatalog);

router.get('/orders', getOrders);


export default router;
