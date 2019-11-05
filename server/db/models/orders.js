const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
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
  },
  total: {
    type: Sequelize.DECIMAL,
    allowNull: false
  }
})

module.exports = Order
