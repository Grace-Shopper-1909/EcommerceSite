import React from 'react'
import {connect} from 'react-redux'
import CartGridCheckout from './cart-grid-checkout'
import {getCart} from '../store/cart'
import {markPurchased} from '../store/checkout'
import {Link} from 'react-router-dom'

class CheckoutPage extends React.Component {
  componentDidMount() {
    // console.log(this.props)
    this.props.getCart(this.props.match.params.userId)
  }

  render() {
    const cart = this.props.cart
    const userId = this.props.user.id

    return (
      <div>
        <h1>Checkout Page</h1>

        <CartGridCheckout cart={cart} user={this.props.user} />
        <div className="center">
          <Link to="/confirm">
            <button
              className="checkout-btn"
              type="button"
              onClick={() => this.props.markPurchased(userId)}
            >
              Complete Purchase
            </button>
          </Link>
        </div>
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
