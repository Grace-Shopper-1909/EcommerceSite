import React from 'react'
import {connect} from 'react-redux'
import CartGridCheckout from './cart-grid-checkout'
import {getCart} from '../store/cart'
import {markPurchased} from '../store/checkout'

class ConfirmationPage extends React.Component {
  componentDidMount() {
    this.props.getCart(this.props.match.params.userId)
  }

  render() {
    const cart = this.props.cart
    const user = this.props.user

    return (
      <div>
        <h1>Order Confirmation Order #3452</h1>
        <div className="order">
          <br />
          <h2>Name</h2>
          <br />
          <h2 id="bold">
            {user.firstName} {user.lastName}
          </h2>
          <br />
          <br />
          <h2>Billing Address</h2>
          <br />
          <h2 id="bold">{user.billingAddress}</h2>
          <br />
          <br />
          <h2>Shipping Address</h2>
          <br />
          <h2 id="bold">{user.shippingAddress}</h2>
          <br />
          <br />
          <h2>Payment Method</h2>
          <br />
          <h2 id="bold">VISA ending in 6445</h2>
        </div>

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
