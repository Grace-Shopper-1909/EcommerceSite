const User = require('./user')
const Product = require('./product')
const db = require('../db')
// const Order = db.model('order')
// const Cart = db.model('cart')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

// Many to many relationship between users & products which will create the cart table
Product.belongsToMany(User, {through: 'cart'})
User.belongsToMany(Product, {through: 'cart'})

// One to One Orders
// User.hasOne(Order)
// Product.belongsTo(Order)

// One to One Cart: User Relationship
// creates cartId on user model
// User.belongsTo(Cart)
// Cart.hasOne(User)

// One to Many Cart: Product & Cart
// creates cartId on product model
// Product.belongsTo(Cart)
// Cart.hasMany(Product)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  db,
  User,
  Product
}
