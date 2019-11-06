const Sequelize = require('sequelize')
const db = require('../db')

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

module.exports = Cart
