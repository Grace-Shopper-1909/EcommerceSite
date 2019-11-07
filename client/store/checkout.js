import axios from 'axios'

/**
 * ACTION TYPES
 */
const constants = {
  GOT_PRODUCTS: 'GOT_PRODUCTS',
  CREATED_ORDER: 'CREATED_ORDER',
  PURCHASED_ORDER: 'PURCHASE_ORDER',
  ADDED_USER: 'ADDED_USER',
  UPDATED_ORDER: 'UPDATED_ORDER',
  REMOVED_PRODUCT: 'REMOVED_PRODUCT',
  UPDATED_PRODUCT: 'UPDATED_PRODUCT'
}

/**
 * INITIAL STATE
 */
const initalState = {
  products: [],
  cart: {}
}

/**
 * ACTION CREATORS
 */
const gotProducts = products => ({
  type: constants.GOT_PRODUCTS,
  products
})

const createdOrder = cart => ({
  type: constants.CREATED_ORDER,
  cart
})

const updatedOrder = cart => ({
  type: constants.UPDATED_ORDER,
  cart
})

/**
 * THUNK CREATORS
 */
export const getProducts = () => async dispatch => {
  try {
    const res = await axios.get('/api/cart/')
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
  const res = await axios.post(`/api/cart`)
  dispatch(createdOrder(res.data))
}

export const updateOrder = productId => async dispatch => {
  const res = await axios.put(`/api/cart/${productId}`)
  dispatch(updatedOrder(res.data))
}

export const purchaseOrder = () => async dispatch => {
  const res = await axios.post(`api/cart/checkout`)
  dispatch(updatedOrder(res.data))
}
/**
 * REDUCER
 */
export default function(state = initalState, action) {
  switch (action.type) {
    case constants.GOT_PRODUCTS:
      return {...state, products: action.products}
    case constants.CREATED_ORDER:
      const newCart = {
        firstName: action.val.firstName,
        lastName: action.val.lastName,
        email: action.val.email,
        quantity: action.val.quantity,
        shippingAddress: action.val.shippingAddress,
        billingAddress: action.val.billingAddress,
        productId: action.val.productId,
        userId: action.valuserId
      }
      return {...state, cart: {...state.cart, newCart}}
    case constants.UPDATED_ORDER:
      return {...state, cart: action.val}
    default:
      return state
  }
}
