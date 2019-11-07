import axios from 'axios'

/**
 * ACTION TYPES
 */
const GOT_CART = 'GOT_CART'

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

/**
 * THUNK CREATORS
 */
export const getCart = () => async dispatch => {
  try {
    const res = await axios.get('/api/<cart>')
    console.log('response', res)
    dispatch(gotCart(res.data))
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
    default:
      return state
  }
}
