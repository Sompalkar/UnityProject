import Catalog from '../models/catalog.model';
import Order from '../models/order.model';
import User from '../models/user.model';

export const getListOfSellers = async (req, res) => {

  try {

    const sellersList = await User.find({ userType: 'seller' }, { _id: 1, username: 1 });

    res.status(200).json(sellersList);

  } catch (error) {

    res.status(500).json({ message: 'Internal Server Error' });

  }
};

export const getSellerCatalog = async (req, res) => {

  try {

    const sellerId = req.params.seller_id;

    const catalog = await Catalog.findOne({ sellerId });

    
    if (!catalog) {
      return res.status(404).json({ message: 'Catalog not found' });
    }

    res.status(200).json(catalog.products);

  } catch (error) {

    res.status(500).json({ message: 'Internal Server Error' });

  }
};


export const createOrder = async (req, res) => {

  try {

    const sellerId = req.params.seller_id;

    const catalog = await Catalog.findOne({ sellerId });


    if (!catalog) {

      return res.status(404).json({ message: 'Catalog not found' });
    }


    const order = new Order({ buyerId: req.user.user.id, sellerId, products: req.body.products });

    await order.save();

    res.status(201).json({ message: 'Order created successfully' });

  } catch (error) {

    res.status(500).json({ message: 'Internal Server Error' });

  }
};
