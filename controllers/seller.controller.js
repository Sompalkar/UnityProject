import Catalog from '../models/catalog.model.js';

import Order from '../models/order.model.js';


export const createCatalog = async (req, res) => {

  try {

    const catalog = new Catalog({ sellerId: req.user.user.id, products: req.body.products });

    await catalog.save();

    res.status(201).json({ message: 'Catalog created successfully', catalog });

  } catch (error) {

    res.status(500).json({ message: 'Internal Server Error' });
  }

};

export const getOrders = async (req, res) => {

  try {

    const sellerId = req.user.user.id;

    const sellerOrders = await Order.find({ sellerId });


    res.status(200).json(sellerOrders);

  } catch (error) {

    res.status(500).json({ message: 'Internal Server Error' });
    
  }
};
