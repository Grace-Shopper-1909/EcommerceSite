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

// const addedProduct = (product, productId) => ({
//   type: ADDED_PRODUCT,
//   productId,
//   product
// })

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
    console.log('axios getCart data', res)
    return dispatch(gotCart(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const deleteProduct = productId => async dispatch => {
  try {
    await axios.delete(`/api/cart/${productId}`)
    // console.log('axios data delete', res)
    return dispatch(deletedProduct(productId))
  } catch (err) {
    console.error(err)
  }
}

// export const addProduct = (product, productId) => async dispatch => {
//   try {
//     const res = await axios.post(`/api/cart/${productId}`, product)
//     console.log('axios data add', res)
//     return dispatch(addedProduct(res.data, productId))
//   } catch (err) {
//     console.error(err)
//   }
// }

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
    case DELETED_PRODUCT:
      return [
        ...state,
        ...state.filter(product => product.id !== action.productId)
      ]
    case ADDED_PRODUCT:
      return [...state, action.userProdObj]
    case UPDATED_PRODUCT:
      return [...state, action.product]
    default:
      return state
  }
}
