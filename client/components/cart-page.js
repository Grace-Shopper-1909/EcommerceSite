import React from 'react'
import {connect} from 'react-redux'
import {getCart} from '../store/cart'
import CartGrid from './cart-grid'

class CartPage extends React.Component {
  componentDidMount() {
    this.props.getCart(this.props.match.params.userId)
  }

  render() {
    const cart = this.props.cart
    console.log('CARTPROPS', cart)

    return (
      <div>
        <h1>Cart Goes Here</h1>
        <CartGrid cart={cart} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCart: userId => dispatch(getCart(userId))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
