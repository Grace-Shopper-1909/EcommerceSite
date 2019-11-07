const express = require('express')
const router = express.Router()
const {Cart, User, Product} = require('../db/models')
router.use(express.json())

// gets all producs in the cart for specified user:

router.get('/', async (req, res) => {
  const user = req.params.userId
  if (!user) {
    res.send('no user defined!')
  } else {
    try {
      const allProducts = await Cart.findAll({
        where: {userId: user, isPurchasd: false}
      })
      if (!allProducts) {
        res.status(404).send('No items in your cart!')
      } else {
        res.send(allProducts)
      }
    } catch (error) {
      console.log(error)
    }
  }
})

// changes status of isPurchased to true, updates shipping and billing address:

router.post('/checkout', (req, res, next) => {
  Cart.findOne({
    where: {productId: req.body.productId, userId: req.body.userId}
  })
    .then(cart =>
      cart.update({
        isPurchasd: true,
        shippingAddress: req.body.shippingAddress,
        deliveryAddress: req.body.deliveryAddress
      })
    )
    .then(cart => res.json(cart))
    .catch(next)
})

// CREATES a row in the cart BY PRODUCTID
// finds user by req.body.userId, if the user doesn't exist, it creates one (with assigned role as 'guest' by default, as specified in user model )

router.post('/:productId', async (req, res) => {
  try {
    await User.findOrCreate({
      where: {
        id: req.body.userId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
      }
    })
    const newCart = Cart.create({
      shippingAddress: req.body.shippingAddress,
      billingAddress: req.body.billingAddress,
      productId: req.params.productId,
      userId: req.body.userId,
      quantity: req.body.quantity,
      status: req.body.status
    })
    res.json(newCart)
  } catch (error) {
    console.log(error)
  }
})
// creates new row in the cart with all params that's specified on req.body
// finds user by req.body.userId, if the user doesn't exist, it creates one (with assigned role as 'guest' by default, as specified in user model )

router.post('/', async (req, res) => {
  try {
    await User.findOrCreate({
      where: {
        id: req.body.userId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
      }
    })
    const newCart = Cart.create(req.body)
    res.json(newCart)
  } catch (error) {
    console.log(error)
  }
})

// deletes product by id from the cart for specified user (which id is on the body of request):

router.delete('/:id', (req, res, next) => {
  const userId = req.body.userId
  if (!userId) {
    res.send('no user defined!')
  } else {
    Cart.destroy({
      where: {
        productId: req.params.id,
        userId
      }
    })
      .then(() => res.status(204).end())
      .catch(next)
  }
})

// updates the cart, by productId (to change the quantity of item)

router.put('/:productId', (req, res, next) => {
  Cart.findOne({
    where: {productId: req.params.productId, userId: req.body.userId}
  })
    .then(cart => cart.update(req.body))
    .then(cart => res.json(cart))
    .catch(next)
})

// updates the cart (to change the quantity of item)
router.put('/', (req, res, next) => {
  Cart.findOne({
    where: {productId: req.body.productId, userId: req.body.userId}
  })
    .then(cart => cart.update(req.body))
    .then(cart => res.json(cart))
    .catch(next)
})

module.exports = router