import axios from 'axios'

/**
 * ACTION TYPES
 */
const GOT_PRODUCTS = 'GOT_PRODUCTS'
const GOT_PRODUCTS_BY_BRAND = 'GOT_PRODUCTS_BY_BRAND'

/**
 * INITIAL STATE
 */
const initalState = []

/**
 * ACTION CREATORS
 */
const gotProducts = products => ({
  type: GOT_PRODUCTS,
  products
})

const gotProductsByBrand = products => ({
  type: GOT_PRODUCTS_BY_BRAND,
  products
})

/**
 * THUNK CREATORS
 */
export const getProducts = () => async dispatch => {
  try {
    const res = await axios.get('/api/products/')

    dispatch(gotProducts(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const getProductsByBrand = brand => async dispatch => {
  try {
    const res = await axios.get(`/api/products/${brand}`)

    dispatch(gotProductsByBrand(res.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initalState, action) {
  switch (action.type) {
    case GOT_PRODUCTS:
      return action.products
    case GOT_PRODUCTS_BY_BRAND:
      return action.products
    default:
      return state
  }
}
