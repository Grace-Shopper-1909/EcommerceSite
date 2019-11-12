import React from 'react'
import {connect} from 'react-redux'
import CartGridCheckout from './cart-grid-checkout'
import {getCart} from '../store/cart'
import {markPurchased} from '../store/checkout'

class CheckoutPage extends React.Component {
  componentDidMount() {
    console.log(this.props)
    this.props.getCart(this.props.match.params.userId)
  }

  render() {
    const cart = this.props.cart
    const userId = this.props.user.id

    console.log('USERID ON PROPS', this.props.user.id)
    console.log('USER', this.props.user)
    console.log('markedPurchased in render', this.props.markPurchased)
    console.log('THIS.props', this.props)
    console.log('ON CLICK', this.props.markPurchased(userId))

    return (
      <div>
        <h1>Checkout Page</h1>

        <CartGridCheckout cart={cart} user={this.props.user} />
        <button
          className="add-to-cart"
          type="button"
          onClick={() => this.props.markPurchased(userId)}
        >
          Complete Purchase
        </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage)
