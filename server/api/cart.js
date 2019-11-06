const router = require('express').Router()
const {Cart, User, Product} = require('../db/models')

// gets all producs in the cart for specified user:

router.get('/', async (req, res) => {
  try {
    const allProducts = await Cart.findAll({
      where: {userId: req.body.userId, isPurchasd: false}
    })
    if (!allProducts) {
      res.status(404).send('No items in your cart!')
    } else {
      res.send(allProducts)
    }
  } catch (error) {
    console.log(error)
  }
})

module.exports = cart
