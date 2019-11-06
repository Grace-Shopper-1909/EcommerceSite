const express = require('express')
const router = express.Router()
const {Cart} = require('../db/models')
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

// // creates new row in the cart with all params that's specified on req.body
// router.post('/', async (req, res) => {
//   try {
//     const newCart = await Cart.create(req.body)
//     res.json(newCart)
//   } catch (error) {
//     res.send(error)
//   }
// })

// updates the cart (to change the quantity of item)
router.put('/', async (req, res, next) => {
  Cart.findOne({
    where: {productId: req.body.productId, userId: req.body.userId}
  })
    .then(cart => cart.update(req.body))
    .then(cart => res.json(cart))
    .catch(next)
})

module.exports = router
