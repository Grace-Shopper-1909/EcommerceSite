const router = require('express').Router()
const Product = require('../db/models/product')

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.send(products)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

// gets all products for a specific brand
router.get('/shopByBrand', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      where: {
        brand: req.body.brand
      }
    })
    res.send(products)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

router.get('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId)
    res.send(product)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

module.exports = router
