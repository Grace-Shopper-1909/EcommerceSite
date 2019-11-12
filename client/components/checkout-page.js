import React from 'react'
import {connect} from 'react-redux'
import CartGridCheckout from './cart-grid-checkout'
import {getCart} from '../store/cart'

class CheckoutPage extends React.Component {
  componentDidMount() {
    console.log(this.props)
    this.props.getCart(this.props.match.params.userId)
  }
  render() {
    const cart = this.props.cart
    return (
      <div>
        <h1>Checkout Page</h1>

        <CartGridCheckout cart={cart} user={this.props.user} />
        <button className="add-to-cart">Complete Purchase</button>
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
    // markPurchased: () => dispatch(markPurchased())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage)
