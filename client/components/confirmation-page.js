import React from 'react'
import {connect} from 'react-redux'
import CartGridCheckout from './cart-grid-checkout'
import {getCart} from '../store/cart'
import {markPurchased} from '../store/checkout'

class ConfirmationPage extends React.Component {
  componentDidMount() {
    // console.log(this.props)
    this.props.getCart(this.props.match.params.userId)
  }

  render() {
    const cart = this.props.cart
    const userId = this.props.user.id

    // console.log('USERID ON PROPS', this.props.user.id)
    // console.log('USER', this.props.user)
    // console.log('markedPurchased in render', this.props.markPurchased)
    // console.log('THIS.props', this.props)
    // console.log('ON CLICK', this.props.markPurchased(userId))

    return (
      <div>
        <h1>Order Confirmation</h1>
        <h2>Success your order has been placed!</h2>
        <CartGridCheckout cart={cart} user={this.props.user} />
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
    getCart: userId => dispatch(getCart(userId)),
    markPurchased: userId => dispatch(markPurchased(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationPage)
