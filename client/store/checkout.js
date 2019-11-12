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
// const markedPurchased = order => ({
//   type: constants.MARKED_PURCHASED,
//   order
// })

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
  console.log('userId in thunk', userId)
  const res = await axios.put(`/api/cart/${userId}`)
  console.log('Axios request response data', res.data)
  dispatch(markedPurchased(res.data))
}

/**
 * REDUCER
 */
export default function(state = initalState, action) {
  switch (action.type) {
    case constants.MARKED_PURCHASED:
      return [...state, action.cart]
    // case constants.GOT_PRODUCTS:
    //   return {...state, products: action.products}
    // case constants.CREATED_ORDER:
    //   const newCart = {
    //     firstName: action.val.firstName,
    //     lastName: action.val.lastName,
    //     email: action.val.email,
    //     quantity: action.val.quantity,
    //     shippingAddress: action.val.shippingAddress,
    //     billingAddress: action.val.billingAddress,
    //     productId: action.val.productId,
    //     userId: action.valuserId
    //   }
    //   return {...state, cart: {...state.cart, newCart}}
    // case constants.UPDATED_ORDER:
    //   return {...state, cart: action.val}
    default:
      return state
  }
}
