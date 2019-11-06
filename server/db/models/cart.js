const Sequelize = require('sequelize')
const db = require('../db')
const Product = require('../models/product')

const Cart = db.define('cart', {
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  status: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
      isIn: [['not ordered', 'processing', 'shipped', 'delivered', 'refunded']]
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  shippingAddress: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  billingAddress: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  dateShipped: {
    type: Sequelize.DATE,
    defaultValue: null
  },
  dateDelivered: {
    type: Sequelize.DATE,
    defaultValue: null
  }
})

// Get Products
Cart.prototype.getTotal = function() {}

// Get Total
Cart.prototype.getTotal = function() {}

module.exports = Cart
