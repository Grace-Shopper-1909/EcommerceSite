const express = require('express')
const router = express.Router()
const {Cart, User, Product} = require('../db/models')
router.use(express.json())

// gets all producs in the cart for specified user:

router.get('/:userId', async (req, res) => {
  const user = req.params.userId
  if (!user) {
    res.send('no user defined!')
  } else {
    try {
      const allProducts = await User.findAll({
        include: {model: Product},
        where: {id: user}
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

//updates the quantity:

router.put('/update/:userId/:productId', (req, res, next) => {
  const userId = req.params.userId
  const productId = req.params.productId
  Cart.findOne({
    where: {
      productId,
      userId
    }
  })
    .then(cart => {
      const newQuantity = req.body.quantity
      cart.update({quantity: newQuantity})
    })
    .then(item => res.json(item))
    .catch(next)
})

router.put('/:userId', async (req, res, next) => {
  try {
    const updatedCart = await Cart.update(
      {
        isPurchasd: true
      },
      {
        where: {userId: req.params.userId},
        returning: true,
        plain: true
      }
    )
    res.send(updatedCart)
  } catch (error) {
    next(error)
  }
})

router.post('/:userId', async (req, res) => {
  const productId = req.body.id
  const userId = req.params.userId
  try {
    const newCart = await Cart.create({productId, userId})

    res.json(newCart)
  } catch (error) {
    console.log(error)
  }
})

router.delete('/:userId/:productId', async (req, res, next) => {
  const userId = req.params.userId
  const productId = req.params.productId

  try {
    const item = await Cart.findOne({
      where: {
        productId,
        userId
      }
    })

    if (item) {
      await item.destroy()
      res.status(204).end()
      console.log('Item was deleted')
    } else {
      console.log('Item could not be updated')
      res.status(404)
    }
  } catch (err) {
    console.error(err)
    next(err)
  }
})

module.exports = router
