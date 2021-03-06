const Sequelize = require('sequelize')
const db = require('../db')
// note: fix the validations for shipping and billing
// create a hook so is purchased cannot be true without shipping and billing addresses
const Cart = db.define('cart', {
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  isPurchasd: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  status: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
      isIn: [['pending', 'processing', 'shipped', 'delivered', 'refunded']]
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
  shippingAddress: {
    type: Sequelize.TEXT
  },
  billingAddress: {
    type: Sequelize.TEXT
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

module.exports = Cart
