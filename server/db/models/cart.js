const Sequelize = require('sequelize')
const db = require('../db')
const Product = require('../models/product')

const Cart = db.define('cart', {
  date: {
    type: Sequelize.DATE
  },
  total: {
    type: Sequelize.DECIMAL,
    allowNull: false
  }
})

// Get Products
Cart.prototype.getTotal = function() {}

// Get Total
Cart.prototype.getTotal = function() {}

module.exports = Cart
