const User = require('./user')
const Product = require('./product')
const Cart = require('./cart')
const db = require('../db')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */
// cart.User = {
//   status: 'active'
// }

// User.addCart()
// Many to many relationship between users & products which will create the cart table
Product.belongsToMany(User, {through: Cart})
User.belongsToMany(Product, {through: Cart})

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  db,
  User,
  Product,
  Cart
}
