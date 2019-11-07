import axios from 'axios'

/**
 * ACTION TYPES
 */
const GOT_CART = 'GOT_CART'
const DELETED_PRODUCT = 'DELETED_PRODUCT'
const ADDED_PRODUCT = 'ADDED_PRODUCT'
const UPDATED_PRODUCT = 'UPDATED_PRODUCT'

/**
 * INITIAL STATE
 */
const initalState = []

/**
 * ACTION CREATORS
 */
const gotCart = cart => ({
  type: GOT_CART,
  cart
})

const deletedProduct = productId => ({
  type: DELETED_PRODUCT,
  productId
})

const addedProduct = (productId, product) => ({
  type: ADDED_PRODUCT,
  productId,
  product
})

const updatedProduct = (productId, product) => ({
  type: UPDATED_PRODUCT,
  productId,
  product
})

/**
 * THUNK CREATORS
 */
export const getCart = () => async dispatch => {
  try {
    const res = await axios.get('/api/cart')
    console.log('axios data get', res)
    return dispatch(gotCart(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const deleteProduct = productId => async dispatch => {
  try {
    const res = await axios.delete(`/api/cart${productId}`)
    console.log('axios data delete', res)
    return dispatch(deletedProduct(productId))
  } catch (err) {
    console.error(err)
  }
}
// this seems like it should be like the delete because it will be a button
// need to grab the Id of the product associated with its add to cart button
// add that product to the cart by producId
// return the productId and the new product object
// how does this work with magic methods? setProduct?
export const addProduct = productId => async dispatch => {
  try {
    const res = await axios.post(`/api/cart/${productId}`)
    console.log('axios data add', res)
    return dispatch(addedProduct(productId, res.data))
  } catch (err) {
    console.error(err)
  }
}

export const updateProduct = productId => async dispatch => {
  try {
    const res = await axios.put(`/api/cart/${productId}`)
    console.log('axios data add', res)
    return dispatch(updatedProduct(productId, res.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function cart(state = initalState, action) {
  switch (action.type) {
    case GOT_CART:
      return [...state, action.cart]
    case DELETED_PRODUCT:
      return [
        ...state,
        ...state.filter(product => product.id !== action.productId)
      ]
    case ADDED_PRODUCT:
      return [...state, action.product]
    case UPDATED_PRODUCT:
      return [...state, action.product]
    default:
      return state
  }
}
