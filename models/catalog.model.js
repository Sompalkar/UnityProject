import mongoose from 'mongoose';

const catalogSchema = new mongoose.Schema({

  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  products: [{
    name: String,
    price: Number
  }],
});



const Catalog = mongoose.model('Catalog', catalogSchema);


export default Catalog;

  