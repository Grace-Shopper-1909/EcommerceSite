import axios from 'axios'

/**
 * ACTION TYPES
 */
// const GOT_PRODUCTS = 'GOT_PRODUCTS'

/**
 * INITIAL STATE
 */
const initalState = []

/**
 * ACTION CREATORS
 */
// const gotProducts = products => ({
//   type: GOT_PRODUCTS,
//   products
// })

/**
 * THUNK CREATORS
 */
// export const getProducts = () => async dispatch => {
//   try {
//     const res = await axios.get('/api/products/')
//     console.log('response', res)
//     dispatch(gotProducts(res.data))
//   } catch (err) {
//     console.error(err)
//   }
// }

/**
 * REDUCER
 */
export default function(state = initalState, action) {
  switch (action.type) {
    default:
      return state
  }
}
