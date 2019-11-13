import axios from 'axios'

/**
 * ACTION TYPES
 */
const constants = {
  GOT_PRODUCTS: 'GOT_PRODUCTS',
  CREATED_ORDER: 'CREATED_ORDER',
  MARKED_PURCHASED: 'MARKED_PURCHASED',
  ADDED_USER: 'ADDED_USER',
  UPDATED_ORDER: 'UPDATED_ORDER',
  REMOVED_PRODUCT: 'REMOVED_PRODUCT',
  UPDATED_PRODUCT: 'UPDATED_PRODUCT'
}

/**
 * INITIAL STATE
 */
const initalState = []

/**
 * ACTION CREATORS
 */

const markedPurchased = cart => ({
  type: constants.MARKED_PURCHASED,
  cart
})

const updatedOrder = cart => ({
  type: constants.UPDATED_ORDER,
  cart
})

/**
 * THUNK CREATORS
 */

export const removeProduct = productId => async dispatch => {
  await axios.delete(`/api/cart/${productId}`)
  dispatch(getProducts())
}

export const createOrder = () => async dispatch => {
  const res = await axios.post(`/api/cart`)
  dispatch(createdOrder(res.data))
}

export const updateOrder = productId => async dispatch => {
  const res = await axios.put(`/api/cart/${productId}`)
  dispatch(updatedOrder(res.data))
}

export const markPurchased = userId => async dispatch => {
  const res = await axios.put(`/api/cart/${userId}`)

  dispatch(markedPurchased(res.data))
}

/**
 * REDUCER
 */
export default function(state = initalState, action) {
  switch (action.type) {
    case constants.MARKED_PURCHASED:
      return [...state, action.cart]

    default:
      return state
  }
}
