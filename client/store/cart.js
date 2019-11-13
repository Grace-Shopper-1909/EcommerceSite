import axios from 'axios'
import {getProducts} from './products'

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

const addedProduct = userProdObj => ({
  type: ADDED_PRODUCT,
  userProdObj
})

const updatedProduct = (productId, product) => ({
  type: UPDATED_PRODUCT,
  productId,
  product
})

/**
 * THUNK CREATORS
 */
export const getCart = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/cart/${userId}`)
    const data = res.data[0].products
    const notPurchasd = data.filter(
      product => product.cart.isPurchasd === false
    )
    return dispatch(gotCart(notPurchasd))
  } catch (err) {
    console.error(err)
  }
}

export const addQuantity = (userId, productId) => async dispatch => {
  await axios.put(`/api/cart/add/${userId}/${productId}`)
  dispatch(getCart(userId))
}

export const reduceQuantity = (userId, productId) => async dispatch => {
  await axios.put(`/api/cart/reduce/${userId}/${productId}`)
  dispatch(getCart(userId))
}

export const deleteProduct = (productId, userId) => async dispatch => {
  try {
    await axios.delete(`/api/cart/${userId}/${productId}`)
    dispatch(deletedProduct(productId, userId))
  } catch (err) {
    console.error(err)
  }
}

export const addProduct = (product, userId) => async dispatch => {
  // console.log('product passed into thunk creator', userProdObj)
  try {
    const res = await axios.post(`/api/cart/${userId}`, product)
    // console.log('axios data add', res)
    return dispatch(addedProduct(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const updateProduct = productId => async dispatch => {
  try {
    const res = await axios.put(`/api/cart/${productId}`)
    // console.log('axios data add', res)
    return dispatch(updatedProduct(productId, res.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initalState, action) {
  switch (action.type) {
    case GOT_CART:
      return action.cart
    case DELETED_PRODUCT: {
      const newState = state.filter(product => product.id !== action.productId)
      console.log('newState', newState)
      return newState
    }
    case ADDED_PRODUCT:
      return [...state, action.userProdObj]
    case UPDATED_PRODUCT:
      return [...state, action.product]
    default:
      return state
  }
}
