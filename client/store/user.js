import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const SET_CURRENT_USER = 'SET_CURRENT_USER'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})
const setCurrentUser = user => ({type: SET_CURRENT_USER, user})

/**
 * THUNK CREATORS
 */
// fetch current user
// export const fetchCurrentUser = () => dispatch => {
//   try {
//     const res = await axios.get('auth/me')
//     return dispatch (setCurrentUser(res.data))
//   } catch (error) {
//     console.error(error)
//   }
// }

export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    console.log('res.data in me thunk', res.data)
    dispatch(getUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}
// sign up
export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      console.log('reducer action.user', action.user)
      return action.user
    case REMOVE_USER:
      return defaultUser
    // case SET_CURRENT_USER:
    //   return action.user
    default:
      return state
  }
}
