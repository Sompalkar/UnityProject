import mongoose from 'mongoose';


const orderSchema = new mongoose.Schema({

  buyerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true

  },

  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true

  },

  products: [{ name: String, price: Number }],

});


const Order = mongoose.model('Order', orderSchema);

export default Order;
