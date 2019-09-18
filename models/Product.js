const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  advertisement_id: {
    type: String
  },
  product_id: {
    type: String
  },
  review_profile_id: {
    type: String
  },
  user_id: {
    type: String
  },
  latitude: {
    type: String
  },
  longitude: {
    type: String
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  price: {
    type: String
  },
  media: {
    type: Array
  },
  media_count: {
    type: String
  },
  slug: {
    type: String
  },
  cell_link: {
    type: String
  },
  price_upper_bound: {
    type: String
  },
  reference_url: {
    type: String
  },
  currency: {
    type: String
  },
  category: {
    type: String
  },
  stock: {
    type: String
  },
  seller: {
    type: Object
  },
  category_data: {
    type: Array
  },
  raw_category_data: {
    type: Array
  },
  tags: {
    type: Array
  },
  state: {
    type: String
  },
  merchant_flags: {
    type: Object
  },
  clicks: {
    type: String
  },
  isBanned: {
    type: String
  },
  isParent: {
    type: String
  },
  isPublished: {
    type: String
  },
  currency_symbol: {
    type: String
  },
  price_str: {
    type: String
  },
  last_bumped: {
    type: String
  },
  created_at: {
    type: Date
  },
  timestamp: {
    type: Date
  },
  loc_name: {
    type: String
  },
  distance_str: {
    type: String
  }
})

module.exports = User = mongoose.model('inventory', ProductSchema);