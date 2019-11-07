import axios from 'axios'

/**
 * ACTION TYPES
 */
const constants = {
  GOT_PRODUCTS: 'GOT_PRODUCTS',
  CREATED_ORDER: 'CREATED_ORDER',
  ADDED_USER: 'ADDED_USER',
  UPDATED_ORDER: 'UPDATED_ORDER',
  REMOVED_PRODUCT: 'REMOVED_PRODUCT',
  UPDATED_PRODUCT: 'UPDATED_PRODUCT'
}

/**
 * INITIAL STATE
 */
const initalState = {
  products: []
}

/**
 * ACTION CREATORS
 */
const gotProducts = products => ({
  type: constants.GOT_PRODUCTS,
  products
})

const createdOrder = order => ({
  type: constants.CREATED_ORDER,
  order
})

const updatedOrder = order => ({
  type: constants.UPDATED_USER,
  order
})
/**
 * THUNK CREATORS
 */
export const getProducts = () => async dispatch => {
  try {
    const res = await axios.get('/api/cart/')
    console.log('response', res)
    dispatch(gotProducts(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const removeProduct = productId => async dispatch => {
  await axios.delete(`/api/cart/${productId}`)
  dispatch(getProducts())
}

export const createOrder = () => async dispatch => {
  await axios.post(`/api/cart`)
  dispatch(createdOrder())
}

export const updateOrder = productId => async dispatch => {
  await axios.put(`/api/cart/${productId}`)
  dispatch(updatedOrder())
}

/**
 * REDUCER
 */
export default function(state = initalState, action) {
  switch (action.type) {
    default:
      return state
  }
}
