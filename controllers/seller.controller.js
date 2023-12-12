import Catalog from '../models/catalog.model.js';
import Order from '../models/order.model.js';

export const createCatalog = async (req, res) => {
  try {
    const { products } = req.body;
    const { seller_id: sellerId } = req.params;

    const catalog = new Catalog({ sellerId, products });
    await catalog.save();

    res.status(201).json({ message: 'Catalog created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};














export const getOrders = async (req, res) => {
  try {

    const { seller_id: sellerId } = req.params;
    const sellerOrders = await Order.find({ sellerId });

    res.status(200).json(sellerOrders);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
