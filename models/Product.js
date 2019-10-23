const db = require('mongoose');
const ProductSchema = new db.Schema({
  id: db.Schema.Types.ObjectId,
  imgName: String,
  imgType: String,
  description: String,
  price: Number,
  inStock: Boolean,
  timeStamp: new Date(),
  height: String,
  width: String,
  imgUrl: String,
  isComplete: Boolean,
  completed: Boolean
});

module.exports = db.model('Product', ProductSchema)