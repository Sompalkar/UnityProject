import Catalog from '../models/catalog.model.js';
import Order from '../models/order.model.js';
import User from '../models/user.model.js';
import mongoose from 'mongoose';

export const getListOfSellers = async (req, res) => {
  try {
    const sellersList = await User.find({ userType: 'seller' }, { _id: 1, username: 1 });
    res.status(200).json(sellersList);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};




export const getSellerCatalog = async (req, res) => {
  const { sellerId } = req.body;

  try {
    const catalog = await Catalog.findOne(sellerId);

    if (!catalog) {
      return res.status(404).json({ message: 'This Seller has No Catalog' });
    }

    res.status(200).json(catalog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};















export const placeOrder = async (req, res) => {
  try {
    const { products, userId } = req.body;
    const { seller_id: sellerId } = req.params;


    // Find the catalog using seller_id

    const catalog = await Catalog.findOne({ sellerId });

    console.log(catalog.sellerId);


    if (!catalog) {
      return res.status(404).json({ message: 'Catalog not found for this Seller' });
    }



    // Create an order
    const order = new Order({
      buyerId: userId,
      sellerId: catalog.sellerId, // Use sellerId from fetched from catalog  details
      products,
    });

    await order.save();

    // Log the order details

    console.log('Order placed successfully:', order);

    // Return a response to the frontend

    res.status(201).json({ message: 'Order placed successfully', order });


  } catch (error) {

    res.status(500).json({ message: 'Internal Server Error' });

  }
}