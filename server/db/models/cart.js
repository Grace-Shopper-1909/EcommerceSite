const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
  date: {
    type: Sequelize.DATE
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  total: {
    type: Sequelize.DECIMAL,
    allowNull: false
  }
})

module.exports = Cart
