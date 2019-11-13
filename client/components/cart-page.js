import React from 'react'
import {connect} from 'react-redux'
import {
  getCart,
  deleteProduct,
  addQuantity,
  reduceQuantity
} from '../store/cart'
import CartGrid from './cart-grid'
import {Link} from 'react-router-dom'

class CartPage extends React.Component {
  componentDidMount() {
    this.props.getCart(this.props.match.params.userId)
  }

  render() {
    const cart = this.props.cart
    const userId = this.props.user.id
    console.log('USERID', userId)

    return (
      <div>
        <h1>Cart</h1>
        <CartGrid
          cart={cart}
          deleteProduct={this.props.deleteProduct}
          user={this.props.user}
          addQuantity={this.props.addQuantity}
          reduceQuantity={this.props.reduceQuantity}
        />
        <div className="center">
          <Link to={`/checkout/${userId}`}>
            <button type="button" className="checkout-btn">
              Checkout
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
    deleteProduct: (productId, userId) =>
      dispatch(deleteProduct(productId, userId)),
    addQuantity: (userId, productId) =>
      dispatch(addQuantity(userId, productId)),
    reduceQuantity: (userId, productId) =>
      dispatch(reduceQuantity(userId, productId))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
