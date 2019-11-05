const db = require('./db')

const User = require('./models/user')
const Product = require('./models/product')
const Order = require('./models/orders')
const Cart = require('./models/cart')

module.exports = {
  db,
  User,
  Product,
  Order,
  Cart
}
