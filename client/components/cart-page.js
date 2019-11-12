import React from 'react'
import {connect} from 'react-redux'
import {getCart, deleteProduct} from '../store/cart'
import CartGrid from './cart-grid'

class CartPage extends React.Component {
  componentDidMount() {
    this.props.getCart(this.props.match.params.userId)
  }

  render() {
    const cart = this.props.cart

    return (
      <div>
        <h1>Cart</h1>
        <CartGrid
          cart={cart}
          deleteProduct={this.props.deleteProduct}
          user={this.props.user}
        />
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
      dispatch(deleteProduct(productId, userId))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
